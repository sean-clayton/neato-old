import * as webpack from 'webpack'

const build = (neatoOptions: INeatoConfig) => new Promise((resolve, reject) => {
  const compiler = webpack(neatoOptions.webpack)

  compiler.run((err, stats) => {
    const softErrors = !err && stats.toJson().errors
    const hasErrors = softErrors && softErrors.length > 0

    if (err || softErrors) {
      console.error('Build Failed')

      if (err) {
        console.error(err.stack || err)
        if (err.details) console.error(err.details)
      }

      if (softErrors) {
        softErrors.forEach(error => {
          console.error(error)
        })
      }

      reject()
    }
    else {
      console.log('Build successful!')
      resolve()
    }
  })
})
