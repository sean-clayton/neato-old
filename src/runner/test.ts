import KarmaServer from 'karma/lib/server'

export default (neatoOptions) => new Promise((resolve, reject) => {
  new KarmaServer(neatoOptions.karma, (exitCode) => {
    if (exitCode === 0) {
      resolve()
    } else {
      reject(exitCode)
    }
  }).start()
})
