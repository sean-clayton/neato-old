require('babel-register')

const webpack = require('webpack')
const config = require('../build/webpack.config')

const bundler = webpack(config)

bundler.run((err, stats) => {
  if (err) {
    console.error(err)
  }
  console.log(stats.toString())
})
