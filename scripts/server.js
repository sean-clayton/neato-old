require('babel-register')

const path = require('path')
const express = require('express')
const historyApiFallback = require('connect-history-api-fallback')
const webpack = require('webpack')
const config = require('../build/webpack.config')

const app = express()
const compiler = webpack(config)

app.use(historyApiFallback({
  verbose: false
}))

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: false,
  publicPath: config.output.publicPath,
  contentBase: path.join(__dirname, '../src'),
  stats: {
    color: true
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  }
}))

app.use(require('webpack-hot-middleware')(compiler))

app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err)
  }

  console.log('Listening at http://localhost:3000')
})
