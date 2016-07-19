import postCSSModulesValues from 'postcss-modules-values'
import postCSSEasyImport from 'postcss-easy-import'
import precss from 'precss'
import postCSSFlexbugsFixes from 'postcss-flexbugs-fixes'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import autoprefixer from 'autoprefixer'
import fileExtensions from '../../file-extensions'
import actions from '../../actions'

const defaultOptions = {
  cssModules: true,
  sourceMaps: true,
  extract: true
}

/**
 * Style preset with
 * - CSS Modules support
 * - Sass language
 * - Autoprefixer
 */
export default {
  name: 'style',
  configure({ action, optimize, pages = [], projectPath, style = {} }) {
    const options = {
      ...defaultOptions,
      ...style
    }

    const shouldExtract = options.extract && pages.length > 0 && action === actions.BUILD
    const localIdentName = optimize ? '[name]_[local]__[hash]' : '[name]_[path]_[local]__[hash:base64:5]'

    const extractCss = new ExtractTextPlugin('[name]-[chunkhash].css', { allChunks: true })

    // toggle source maps and CSS Modules
    const cssModules = options.cssModules ? 'modules' : ''
    const sourceMaps = options.sourceMaps ? 'sourceMap' : ''

    // importLoaders: use the following postcss-loader in @import statements
    // modules: enable css-modules
    const cssLoaders = [
      `css?${cssModules}&${sourceMaps}&importLoaders=1&localIdentName=${localIdentName}`,
      'postcss-loader'
    ]

    return {
      postcss: [
        precss,
        postCSSEasyImport,
        postCSSModulesValues,
        autoprefixer({ browsers: ['last 2 versions'] }),
        postCSSFlexbugsFixes
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
