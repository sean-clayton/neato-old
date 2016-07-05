import packageJSON from './package-json'
import template from './template'

const runner = ({ projectPath }) => new Promise((resolve, reject) => {
  try {
    packageJSON(projectPath)
    template(projectPath)
  }
  catch (e) {
    reject(e)
  }

  resolve()
})

export default runner
