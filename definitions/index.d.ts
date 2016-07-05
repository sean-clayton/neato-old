interface INeato extends INeatoConfig {
  projectPath: string,
  run(): any,
  cli: any
}

interface INeatoConfig {
  projectPath?: string,
  buildTarget?: string,
  action?: string,
  port?: number,
  neato?: string,
  hotReloading?: boolean,
  optimize?: boolean,
  defineNodeEnv?: boolean,
  clean?: boolean,
  coverage?: boolean,
  lint?: boolean,
  pages?: string[],
  disabledLoaders?: string[],
  javascript?: IJavascriptConfig,
  webpack?: any,
  ava?: any
}

interface INeatoError {
  name: string,
  message: string,
  stack?: string
}

interface IJavascriptConfig {
  buildDependencies?: string[]
}

interface Error {
  details?: string
}

// TODO: IAvaConfig
// TODO: IWebpackConfig
// TODO: IPage
// TODO: ILoader
