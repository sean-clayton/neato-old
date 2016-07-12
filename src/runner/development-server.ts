import * as webpack from 'webpack'
import { logError, log } from '../util/log'
import Server from 'webpack-dev-server'

/**
 * Development server
 */
export default (saguiOptions) => new Promise((resolve, reject) => {
  const options = {
    hot: true,
    historyApiFallback: saguiOptions.pages && saguiOptions.pages[0] && `${saguiOptions.pages[0]}.html`
  }

  try {
    new Server(webpack(setupHMR(saguiOptions).webpack), options).listen(saguiOptions.port, '0.0.0.0', (err) => {
      if (err) {
        logError(`Server failed to started at http://localhost:${saguiOptions.port}`)
        reject(err)
      } else {
        log(`Server started at http://localhost:${saguiOptions.port}/webpack-dev-server/`)
      }
    })
  } catch (e) {
    reject(e)
  }
})

/**
 * HMR bundle setup based on code from
 * https://github.com/webpack/webpack-dev-server/blob/master/bin/webpack-dev-server.js
 */
function setupHMR(neatoOptions) {
  return Object.assign({}, neatoOptions, {
    webpack: neatoOptions.webpack.map(webpackConfig => Object.assign({}, webpackConfig, {
      entry: concatHMRBundle(neatoOptions, webpackConfig.entry)
    }))
  })
}

function concatHMRBundle (neatoOptions, entry) {
  const devClient = [
    require.resolve('webpack-dev-server/client/') + '?http://0.0.0.0:' + neatoOptions.port,
    'webpack/hot/dev-server'
  ]

  if (typeof entry === 'object' && !Array.isArray(entry)) {
    return Object.keys(entry).reduce((entries, key) => Object.assign({}, {
      [key]: devClient.concat(entry.key)
    }), {})
  } else {
    return devClient.concat(entry)
  }
}
