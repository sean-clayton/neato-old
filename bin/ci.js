#!/usr/bin/env node
const path = require('path')
const neatoPath = path.join(__dirname, '..')

function exec (command, cwd) {
  // pass the parent´s stdio to the child process
  // http://stackoverflow.com/a/31104898
  require('child_process').execSync(command, { cwd: cwd, stdio: [0, 1, 2] })
}

function createTempFolder () {
  return require('tmp').dirSync().name
}

if (process.env.TEST_TYPE === 'lint') {
  exec('npm run lint', neatoPath)
}

if (process.env.TEST_TYPE === 'test_create_project') {
  // # builds Neato before installing
  exec('npm run build', neatoPath)

  // # Create a new project and install Neato
  const projectPath = createTempFolder()
  exec('npm init -y .', projectPath)
  exec(`npm install --save-dev file://${neatoPath}`, projectPath)
}
