import webpack from 'webpack'
import { logError, log } from '../util/log'
import Server from 'webpack-dev-server'

/**
 * Development server
 */
export default (neatoOptions) => new Promise((resolve, reject) => {
  const options = {
    inline: true,
    hot: true,
    historyApiFallback: neatoOptions.pages && neatoOptions.pages[0] && `${neatoOptions.pages[0]}.html`,
    stats: {
      colors: true,
      chunks: false,
      noInfo: true
    }
  }

  try {
    new Server(webpack(setupHMR(neatoOptions).webpack), options).listen(neatoOptions.port, '0.0.0.0', (err) => {
      if (err) {
        logError(`Server failed to started at http://localhost:${neatoOptions.port}`)
        reject(err)
      }
      else {
        log(`Server started at http://localhost:${neatoOptions.port}/webpack-dev-server/`)
      }
    })
  }
  catch (e) {
    reject(e)
  }
})

/**
 * HMR bundle setup based on code from
 * https://github.com/webpack/webpack-dev-server/blob/master/bin/webpack-dev-server.js
 */
function setupHMR(neatoOptions) {
  return {
    ...neatoOptions,
    webpack: neatoOptions.webpack.map((webpack) => ({
      ...webpack,
      entry: concatHMRBundle(neatoOptions, webpack.entry)
    }))
  }
}

function concatHMRBundle(neatoOptions, entry) {
  const devClient = [
    `${require.resolve('webpack-dev-server/client/')}?http://0.0.0.0:${neatoOptions.port}`,
    'webpack/hot/dev-server'
  ]

  if (typeof entry === 'object' && !Array.isArray(entry)) {
    return Object.keys(entry).reduce((entries, key) => ({
      ...entries,
      [key]: devClient.concat(entry[key])
    }), {})
  }
  else {
    return devClient.concat(entry)
  }
}
