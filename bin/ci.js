#!/usr/bin/env node
const path = require('path')
const neatoPath = path.join(__dirname, '..')

function exec(command, cwd, callback = (command, cwd) => console.info(`Finished running "${command}" in "${cwd}"`)) {
  // Pass the parent´s stdio to the child process
  // http://stackoverflow.com/a/31104898
  require('child_process').execSync(command, { cwd: cwd, stdio: [0, 1, 2] })
  callback(command, cwd)
}

const createTempFolder = () => require('tmp').dirSync().name

if (process.env.TEST_TYPE === 'lint') {
  exec('npm run lint', neatoPath)
}

if (process.env.TEST_TYPE === 'test_create_project') {
  const buildCommand = 'npm run build'
  const npmInitCommand = 'npm init -y .'
  const npmInstallCommand = `npm i -S --no-optional file://${neatoPath}`
  // Builds Neato before installing
  console.info(`Running "${buildCommand}" in ${neatoPath}`)
  exec(buildCommand, neatoPath)

  // Create a new project and install Neato
  console.info('Creating temporary folder')
  const projectPath = createTempFolder()
  console.info(`Created temporary folder at ${projectPath}`)

  console.info(`Running "${npmInitCommand}" in ${projectPath}`)
  exec(npmInitCommand, projectPath)

  console.info(`Running "${npmInstallCommand}" in ${projectPath}`)
  exec(npmInstallCommand, projectPath, () => console.info('Installed Neato!'))
}
