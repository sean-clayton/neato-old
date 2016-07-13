import chalk from 'chalk'

const errorStyle = chalk.bold.red
const warningStyle = chalk.yellow

export function logError (entry) {
  console.log(neato(), errorStyle(entry))
}

export function logWarning (entry) {
  console.log(neato(), warningStyle(entry))
}

export function log (entry) {
  console.log(neato(), entry)
}

function neato () {
  return chalk.dim('Neato')
}
