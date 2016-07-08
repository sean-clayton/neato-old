import { DefinePlugin } from 'webpack'

const defineNodeENV = {
  name: 'define-node-env',
  configure() {
    return {
      plugins: [
        new DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
      ]
    }
  }
}

export default defineNodeENV
