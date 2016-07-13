/**
 * Given one configuration object, it returns and array of more than one
 * with archetype specific configuration
 *
 * This a requirement because when we build libraries, we can only have a
 * single entry-point in the webpack configuration.
 *
 * This function turns { libraries } into { library }, check the tests for
 * more information.
 */

function _objectWithoutProperties(obj, keys) {
  let target = {}
  for (let i in obj) {
    if (keys.indexOf(i) >= 0) continue
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
    target[i] = obj[i]
  }
  return target
}

export default function (neatoOptions) {
  const archetypes = []

  const { pages, libraries } = neatoOptions
  const otherOptions = _objectWithoutProperties(neatoOptions, ['pages', 'libraries'])


  if (pages && pages.length > 0) {
    archetypes.push(Object.assign({}, { pages }, otherOptions))
  }

  if (libraries && libraries.length > 0) {
    libraries.forEach((library) => {
      archetypes.push(Object.assign({}, { library }, otherOptions))
    })
  }

  return archetypes
}
