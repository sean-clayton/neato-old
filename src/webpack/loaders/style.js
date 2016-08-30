import path from 'path'
import postCSSModulesValues from 'postcss-modules-values'
import postCSSImport from 'postcss-import'
import precss from 'precss'
import postCSSFlexbugsFixes from 'postcss-flexbugs-fixes'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import cssnano from 'cssnano'
import fileExtensions from '../../file-extensions'
import actions from '../../actions'

const defaultOptions = {
  cssModules: true,
  sourceMaps: true,
  extract: true
}

export default {
  name: 'style',
  configure({ action, optimize, pages = [], projectPath, style = {} }) {
    const options = {
      ...defaultOptions,
      ...style
    }

    const shouldExtract = options.extract && pages.length > 0 && action === actions.BUILD
    const localIdentName = optimize ? '[name]_[local]__[hash]' : '[name]_[path]_[local]__[hash:base64:5]'

    // toggle source maps and CSS Modules
    const cssModules = options.cssModules ? 'modules' : ''
    const sourceMaps = options.sourceMaps ? 'sourceMap' : ''

    // importLoaders: use the following postcss-loader in @import statements
    // modules: enable css-modules
    const cssLoaders = [
      `css?${cssModules}&${sourceMaps}&importLoaders=1&localIdentName=${localIdentName}`,
      'postcss-loader'
    ]

    const globalCssLoaders = [
      `css?${sourceMaps}`,
      'postcss-loader'
    ]

    return {
      postcss: webpack => ({
        plugins: [
          postCSSImport({
            root: projectPath,
            path: [
              path.resolve(projectPath, 'src'),
              path.resolve(projectPath, 'node_modules')
            ],
            addDependencyTo: webpack
          }),
          postCSSModulesValues,
          precss,
          cssnano({
            sourcemap: true,
            autoprefixer: {
              add: true,
              remove: true,
              browsers: ['last 2 versions']
            },
            safe: true,
            discardComments: {
              removeAll: true
            }
          }),
          postCSSFlexbugsFixes
        ]
      }),

      module: {
        loaders: [
          {
            test: fileExtensions.test.CSS,
            include: path.resolve(projectPath, './src'),
            exclude: path.resolve(projectPath, './src/styles'),
            loader: shouldExtract
              ? ExtractTextPlugin.extract(cssLoaders)
              : ['style', ...cssLoaders].join('!')
          },
          {
            test: fileExtensions.test.GLOBAL_CSS,
            include: [
              path.resolve(projectPath, './node_modules'),
              path.resolve(projectPath, './src/styles')
            ],
            loader: shouldExtract
              ? ExtractTextPlugin.extract(globalCssLoaders)
              : ['style', ...globalCssLoaders].join('!')
          }
        ]
      },

      plugins: shouldExtract ? [new ExtractTextPlugin({
        filename: '[name]-[chunkhash].css',
        allChunks: true
      })] : []
    }
  }
}
