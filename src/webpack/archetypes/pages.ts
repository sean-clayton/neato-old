import { join } from 'path'
import actions from '../../actions'

const HtmlWebpackPlugin = require('html-webpack-plugin')

const configurePlugins = (pages, action) => {
  const plugins = pages.map(page => {
    return new HtmlWebpackPlugin({
      template: `${page}.html`,
      filename: `${page}.html`,
      chunks: ['common', page]
    })
  })
}

const configureEntry = pages => {
  let entry = {}
  pages.forEach(page => entry[page] = [`./${page}`])
  return entry
}

const pages: INeatoWebpackConfig = {
  name: 'pages',
  configure({ pages = [], action, projectPath }) {
    if (pages.length === 0) return {}

    const entry = configureEntry(pages)
    const plugins = configurePlugins(pages, action)

    return {
      output: {
        path: join(projectPath, 'dist'),
        filename: '[name]-[hash].js',
        chunkFilename: '[name]-[hash].chunk.js'
      },
      plugins,
      entry
    }
  }
}

export default pages
