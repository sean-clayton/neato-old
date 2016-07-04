import { statSync } from 'fs'

function fileExists (file) {
  try {
    statSync(file)
    return true
  } catch (e) {
    return false
  }
}

export default fileExists
