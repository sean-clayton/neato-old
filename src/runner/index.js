import actions from '../actions'
import build from './build'
import developmentServer from './development-server'
import install from './install'
import lint from './lint'

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

    default:
      return Promise.reject('A valid action is required.')
  }
}
