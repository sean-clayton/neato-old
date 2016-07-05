import * as path from 'path'
import * as program from 'commander'
import neato, { MissingPackageJSONError, NeatoPathError } from '../index'
import buildTargets from '../build-targets'

const normalize = (env = buildTargets.DEVELOPMENT) => env.toLowerCase().trim()

const setupAction = (action) => (cliOptions = {}) => {
  const options: INeatoConfig = Object.assign({}, cliOptions, {
    action,
    buildTarget: normalize(process.env.NODE_ENV),
    projectPath: process.env.NEATO_LINK
      ? process.cwd()
      : path.join(__dirname, '../../../../')
  })

  neato(options).run().then(() => process.exit(0), () => process.exit(1))
}

program.command('install')
  .description('Install or update Neato in the current project')
  .action(setupAction('install'))

program.command('build')
  .description('Build the project')
  .option('-p, --optimize', 'Optimize the build (minify, dedup...)')
  .action(setupAction('build'))

program.command('develop')
  .description('Run development environment')
  .option('-p, --port <n>', 'Port the server will listen (default: 3000)', parseInt)
  .action(setupAction('develop'))

export default (argv: string[] = []) => {
  try {
    program.parse(argv)
  } catch (e) {
    if (e instanceof NeatoPathError || e instanceof MissingPackageJSONError) {
      console.log(e.message)
      return
    }

    console.error('Error starting Neato')
    console.error(e.stack || e)
  }

  if (!argv.slice(2).length) program.outputHelp()
}
