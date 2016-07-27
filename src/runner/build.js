import webpack from 'webpack'
import { logError, log, logInfo } from '../util/log'

export default (neatoOptions) => new Promise((resolve, reject) => {
  const compiler = webpack(neatoOptions.webpack)

  compiler.run((err, stats) => {
    var softErrors = !err && stats.toJson().errors
    var hasSoftErrors = softErrors && softErrors.length > 0

    if (err || hasSoftErrors) {
      logError('Build failed.')

      if (err) {
        console.error(err.stack || err)
        if (err.details) console.error(err.details)
      }

      if (hasSoftErrors) {
        softErrors.forEach(error => {
          console.error(error)
        })
      }

      reject()
    }
    else {
      log('Built successfully.')
      logInfo(stats.toString({
        colors: true,
        chunks: false
      }))
      resolve()
    }
  })
})
