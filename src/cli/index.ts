import * as path from 'path'
import * as program from 'commander'
import neato, { MissingPackageJSONError, NeatoPathError } from '../index'

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

program.command('install')
  .description('Install or update Neato in the current project')

program.command('test')
  .description('Run tests')
  .option('-w, --watch', 'Run tests on any file change')
  .option('-c, --coverage', 'Generate a coverage report')

program.command('lint')
  .description('Lint the code')

program.command('build')
  .description('Build the project')
  .option('-p, --optimize', 'Optimize the build (minify, dedup...)')

program.command('develop')
  .description('Run development environment')
  .option('-p, --port <n>', 'Port the server will listen (default: 3000)', parseInt)
