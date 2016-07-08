import developmentServer from './development-server'
import build from './build'
import install from './install'
import actions from '../actions'

const runner = (neatoOptions: any): INeatoConfig => {
  switch (neatoOptions.action) {
    // TODO: Test action
    case actions.DEVELOP:
      return developmentServer(neatoOptions)
    case actions.BUILD:
      return build(neatoOptions)
    case actions.INSTALL:
      return install(neatoOptions)
    // TODO: Lint

    default:
      return Promise.reject('A valid action is required.')
  }
}

export default runner
