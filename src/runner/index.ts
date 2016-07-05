import developmentServer from './development-server'
import build from './build'
import install from './install'
import lint from './lint'
import actions from '../actions'

const runner = (neatoOptions: INeatoUserConfig) => {
  switch (neatoOptions.action) {
    // TODO: Test action
    case actions.DEVELOP:
      return developmentServer(neatoOptions)
    case actions.BUILD:
      return build(neatoOptions)
    case actions.INSTALL:
      return install(neatoOptions)
    case actions.LINT:
      return lint(neatoOptions)

    default:
      return Promise.reject('A valid action is required.')
  }
}

export default runner
