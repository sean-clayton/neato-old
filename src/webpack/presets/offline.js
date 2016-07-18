import OfflinePlugin from 'offline-plugin'

export default {
  name: 'offline',
  configure({ offlineOptions }) {
    // offlineOptions is a valid offline-plugin config object
    // See: https://www.npmjs.com/package/offline-plugin
    return {
      plugins: [
        new OfflinePlugin(offlineOptions)
      ]
    }
  }
}
