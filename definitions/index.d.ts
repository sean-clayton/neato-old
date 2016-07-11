interface INeato extends INeatoConfig {
  run(): any,
  cli(): any
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
  ava?: any,
  library?: string
}

interface INeatoError {
  name: string,
  message: string,
  stack?: string
}

interface IJavascriptConfig {
  buildDependencies?: string[],
  transpileDependencies?: string[]
}

interface Error {
  details?: string
}

interface IConfigureFunction {
  (neatoOptions: INeatoConfig): any
}

interface INeatoWebpackConfig {
  name: string,
  configure?: IConfigureFunction
}

// TODO: IAvaConfig
// TODO: IPage
// TODO: ILoader
