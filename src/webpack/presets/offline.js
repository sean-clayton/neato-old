import OfflinePlugin from 'offline-plugin'

export default {
  name: 'offline',
  configure({ offline = true, offlineOptions = {} }) {
    // offlineOptions is a valid offline-plugin config object
    // See: https://www.npmjs.com/package/offline-plugin
    return offline ? { plugins: [new OfflinePlugin(offlineOptions)] } : {}
  }
}
