import { DefinePlugin } from 'webpack'

const env = process.env.NODE_ENV || 'development'

export default {
  name: 'define-node-env',
  configure() {
    return {
      plugins: [
        new DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(env),
          '__DEV__': env === 'development',
          '__PROD__': env === 'production',
          '__TEST__': env === 'test'
        })
      ]
    }
  }
}
