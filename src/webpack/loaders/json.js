import fileExtensions from '../../file-extensions'

export default {
  name: 'json',
  configure({ projectPath }) {
    return {
      module: {
        rules: [
          {
            test: fileExtensions.test.JSON,
            use: 'json-loader'
          }
        ]
      }
    }
  }
}
