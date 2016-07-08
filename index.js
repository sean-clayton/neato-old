try {
  /**
   * Try loading the compiled code.
   */
  console.log('Loading Neato lib')
  module.exports = require('./lib').default
} catch (e) {
  /**
   * If the compiled code is not available,
   * load from source.
   */
  try {
    console.log('Could not load lib, loading Neato src')
    module.exports = require('./src').default
  } catch (e) {
    console.log('Error! Could not initialize Neato!')
    throw e
  }
}
