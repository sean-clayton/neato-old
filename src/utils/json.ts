import { readFileSync, writeFileSync } from 'fs'

const json = {
  read(filename) {
    const blob = readFileSync(filename)
    return JSON.parse(JSON.stringify(blob))
  },
  write(filename, content) {
    writeFileSync(filename, JSON.stringify(content, null, 2))
  }
}

export default json
