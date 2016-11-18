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
  configure({ action, optimize, pages = [], projectPath, style = { postcssPlugins: [] }, filename = {} }) {
    const options = {
      ...defaultOptions,
      ...style
    }

    const shouldExtract = options.extract && pages.length > 0 && action === actions.BUILD
    const localIdentName = optimize ? '[name]_[local]__[hash:base64:5]' : '[path][name]_[local]__[hash:base64:5]'

    // toggle source maps and CSS Modules
    const cssModules = options.cssModules
    const sourceMaps = options.sourceMaps

    // importLoaders: use the following postcss-loader in @import statements
    // modules: enable css-modules
    const cssLoaders = [
      {
        loader: 'css-loader',
        modules: cssModules,
        sourceMap: sourceMaps,
        importLoaders: 1,
        localIdentName
      },
      {
        loader: 'postcss-loader'
      }
    ]

    const globalCssLoaders = [
      {
        loader: 'css-loader',
        sourceMap: sourceMaps
      },
      { loader: 'postcss-loader' }
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
          postCSSFlexbugsFixes,
          ...style.postcssPlugins
        ]
      }),

      module: {
        rules: [
          {
            test: fileExtensions.test.CSS,
            include: path.resolve(projectPath, './src'),
            exclude: path.resolve(projectPath, './src/styles'),
            use: shouldExtract
              ? ExtractTextPlugin.extract(cssLoaders)
              : ['style-loader', ...cssLoaders].join('!')
          },
          {
            test: fileExtensions.test.GLOBAL_CSS,
            include: [
              path.resolve(projectPath, './node_modules'),
              path.resolve(projectPath, './src/styles')
            ],
            use: shouldExtract
              ? ExtractTextPlugin.extract(globalCssLoaders)
              : ['style-loader', ...globalCssLoaders].join('!')
          }
        ]
      },

      plugins: shouldExtract ? [new ExtractTextPlugin({
        filename: filename.css || '[name]-[chunkhash].css',
        allChunks: true
      })] : []
    }
  }
}
