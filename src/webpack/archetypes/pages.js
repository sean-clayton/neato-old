import HtmlWebpackPlugin from 'html-webpack-plugin'
import { join } from 'path'
import { optimize } from 'webpack'
import actions from '../../actions'

export default {
  name: 'pages',
  configure({ pages = [], action, projectPath, optimize, vendor = [], filename = {} }) {
    if (pages.length === 0) { return {} }

    const entry = configureEntry(pages, vendor)
    const plugins = configurePlugins(pages, action)

    return {
      output: {
        publicPath: '/',
        path: join(projectPath, 'dist'),
        filename: optimize ? filename.dev || '[name]-[chunkhash].js' : filename.prod || '[name]-[hash].js',
        chunkFilename: optimize ? '[name]-[chunkhash].chunk.js' : '[name]-[hash].chunk.js'
      },
      plugins,
      entry
    }
  }
}

const reservedNames = ['shared', 'vendor', 'webpack']

function configureEntry(pages, vendor) {
  let entry = {}

  pages.forEach((page) => {
    if (reservedNames.some(name => page === name)) throw new Error(`Reserved name "${page}"`)
    entry[page] = [`./${page}`]
  })

  entry.vendor = vendor

  return entry
}

function configurePlugins(pages, action) {
  const plugins = pages.map((page) => {
    return new HtmlWebpackPlugin({
      template: `${page}.html`,
      filename: `${page}.html`,
      chunks: [...reservedNames, page]
    })
  })

  if (action !== actions.TEST) {
    plugins.push(new optimize.CommonsChunkPlugin(['shared', 'vendor', 'webpack']))
  }

  return plugins
}
