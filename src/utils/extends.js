const _extends = Object.assign || (target) => {
  for (let i = 1; i < arguments.length; i++) {
    const source = arguments[i]
    for (let key: string | number in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key]
      }
    }
  }
  return target
}

export default _extends
