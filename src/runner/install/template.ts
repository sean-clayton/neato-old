import { join, basename } from 'path'
import { copySync } from 'fs-extra'
import fileExists from '../../utils/file-exists'
const templateDir = require('template-directory') // Using this because @types/template-directory doesn't exist :(

const basePath = join(__dirname, '../../../template/base')
const dotFilesPath = join(__dirname, '../../../template/dot-files')

const copyBase = projectPath => {
  const projectName = basename(projectPath)

  templateDir(basePath, projectPath, {
    projectName: projectName
  }, { clobber: false })
}

const copyDotFiles = projectPath => {
  copySync(join(dotFilesPath, 'babelrc'), join(projectPath, '.babelrc'), { clobber: false })
  copySync(join(dotFilesPath, 'editorconfig'), join(projectPath, '.editorconfig'), { clobber: false })
  copySync(join(dotFilesPath, 'eslintrc'), join(projectPath, '.eslintrc'), { clobber: false })
  copySync(join(dotFilesPath, 'eslintignore'), join(projectPath, '.eslintignore'), { clobber: false })
  copySync(join(dotFilesPath, 'gitignore'), join(projectPath, '.gitignore'), { clobber: false })
}

const template = projectPath => {
  const srcFolder = join(projectPath, 'src')

  if (!fileExists(srcFolder)) {
    copyBase(projectPath)
    copyDotFiles(projectPath)
  }
  else {
    console.warn('Skipped install files in src, folder already exists')
  }
}

export default template
