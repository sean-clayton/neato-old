// Declare node modules to TS doesn't complain
declare module "webpack-dev-server"
declare module "eslint"
declare module "karma/lib/server"
declare module "flow-bin"
declare module "template-directory"
declare module "webpack-merge"
declare module "html-webpack-plugin"
declare module "babel-plugin-react-transform"
declare module "postcss-modules-values"
declare module "extract-text-webpack-plugin"
declare module "autoprefixer"
declare module "clean-webpack-plugin"

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
  code?: number
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
