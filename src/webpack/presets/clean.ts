const CleanWebpackPlugin = require('clean-webpack-plugin')

const clean = {
  name: 'clean',
  configure({ projectPath }) {
    return {
      plugins: [
        new CleanWebpackPlugin(['dist'], {
          root: projectPath,
          verbose: false
        })
      ]
    }
  }
}

export default clean
