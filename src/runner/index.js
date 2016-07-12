import actions from '../actions'
import build from './build'
import developmentServer from './development-server'
import install from './install'
import lint from './lint'
import test from './test'
import typecheck from './typecheck'

export default (neatoOptions) => {
  switch (neatoOptions.action) {
    case actions.BUILD:
      return build(neatoOptions)

    case actions.DEVELOP:
      return developmentServer(neatoOptions)

    case actions.INSTALL:
      return install(neatoOptions)

    case actions.LINT:
      return lint(neatoOptions)

    case actions.TEST:
      return test(neatoOptions)

    case actions.TYPECHECK:
      return typecheck(neatoOptions)

    default:
      return Promise.reject('A valid action is required.')
  }
}
