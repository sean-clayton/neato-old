import chalk from 'chalk'

const errorStyle = chalk.bold.red
const warningStyle = chalk.bold.yellow
const debugStyle = chalk.green
const infoStyle = chalk.blue

export const logError = entry => console.log(neato(), errorStyle.inverse('ERROR'), errorStyle(entry))
export const logWarning = entry => console.log(neato(), warningStyle.inverse('WARNING'), warningStyle(entry))
export const logDebug = entry => console.log(neato(), debugStyle.inverse('DEBUG'), debugStyle(entry))
export const logInfo = entry => console.log(neato(), infoStyle.inverse('INFO'), infoStyle(entry))
export const log = entry => console.log(neato(), entry)

function neato() {
  return chalk.bgBlue('Neato')
}
