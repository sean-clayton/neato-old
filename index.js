const lib = require('./lib').default
/* eslint-disable */
const src = require('./src').default
/* eslint-enable */

try {
  /**
   * Try loading the compiled code.
   */
  console.log('Loading Neato lib')
  module.exports = lib
} catch (e) {
  /**
   * If the compiled code is not available,
   * load from source.
   */
  try {
    console.log('Could not load lib, loading Neato TypeScript src')
    module.exports = src
  } catch (err) {
    console.log('Error! Could not initialize Neato!')
    throw err
  }
}
