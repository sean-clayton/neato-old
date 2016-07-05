import * as webpack from 'webpack'
const Server = require('webpack-dev-server')

const concatHMRBundle = (neatoOptions: INeatoConfig, entry) => {
  const devClient = [
    require.resolve('webpack-dev-server/client') + '?http://0.0.0.0:' + neatoOptions.port,
    'webpack/hot/dev-server'
  ]

  return typeof entry === 'object' && !Array.isArray(entry)
    ? Object.keys(entry).reduce((entries, key) => Object.assign({}, entries, { [key]: devClient.concat(entry[key]) }), {})
    : devClient.concat(entry)
}

const setupHMR = neatoOptions => Object.assign({}, neatoOptions, {
  webpack: neatoOptions.webpack.map(webpack => Object.assign({}, webpack, {
    entry: concatHMRBundle(neatoOptions, webpack.entry)
  }))
}) 

const developmentServer = neatoOptions => new Promise((resolve, reject) => {
  const options = {
    hot: true,
    historyApiFallback: neatoOptions.pages && neatoOptions.pages[0] && `${neatoOptions.pages[0]}.html`
  }

  try {
    new Server(webpack(setupHMR(neatoOptions.webpack)), options).listen(neatoOptions.port, '0.0.0.0', err => {
      if (err) {
        console.error(`Server failed to start at http://localhost:${neatoOptions.port}`)
        reject(err)
      }
      else {
        console.log(`Server started at http://localhost:${neatoOptions.port}`)
      }
    })
  }
  catch (e) {
    reject(e)
  }
})

export default developmentServer
