import * as path from 'path'
import fileExtensions from '../../file-extensions'
import actions from '../../actions'

const postCSSModulesValues = require('postcss-modules-values')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

const defaultOptions = {
  cssModules: true,
  sourceMaps: true,
  extract: true
}

const style = {
  name: 'style',
  configure({ action, optimize, pages = [], projectPath, style = {} }) {
    const options = Object.assign({}, defaultOptions, style)
    const shouldExtract = options.extract && pages.length > 0 && action === actions.BUILD
    const localIdentName = optimize ? '[hash]' : '[path][local]-[hash:base64:5]'
    const extractCss = new ExtractTextPlugin('[name]-[hash]-0.css')
    const cssModules = options.cssModules ? 'modules' : ''
    const sourceMaps = options.sourceMaps ? 'sourceMap' : ''
    const cssLoaders = [
      `css?${cssModules}&${sourceMaps}&importLoaders=1&localIdentName=${localIdentName}`,
      'postcss-loader'
    ]

    return {
      postcss: [
        postCSSModulesValues,
        autoprefixer({ browsers: ['last 2 versions']})
      ],
      module: {
        loaders: [
          {
            test: fileExtensions.test.CSS,
            loader: shouldExtract
              ? extractCss.extract(cssLoaders)
              : ['style', ...cssLoaders].join('!')
          }
        ]
      },
      plugins: shouldExtract ? [extractCss] : []
    }
  }
}

export default style
