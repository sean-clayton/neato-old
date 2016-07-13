const neatoScripts = {
  'neato:build': [
    'neato build'
  ],
  'neato:dev': [
    'neato develop --port 3000'
  ],
  'neato:deploy': [
    'cross-env NODE_ENV=production neato build --optimize'
  ],
  'neato:start': [
    'npm run neato:develop'
  ],
  'neato:lint': [
    'neato lint'
  ]
}

export default (scripts = {}) => Object.keys(neatoScripts).reduce((scripts, key) => {
  if (!scripts[key] || neatoScripts[key].indexOf(scripts[key]) !== -1) {
    scripts[key] = neatoScripts[key][neatoScripts[key].length - 1]
  }
  return scripts
}, scripts)
