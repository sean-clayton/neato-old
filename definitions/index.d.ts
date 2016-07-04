interface INeato extends INeatoConfig {
  projectPath: string,
  buildTarget: NeatoBuildTarget
  run(): any,
  cli: any
}

interface INeatoConfig extends INeatoUserConfig {
  port: number,
  neato: string,
  hotReloading: boolean,
  optimize: boolean,
  defineNodeEnv: boolean,
  clean: boolean,
  coverage: boolean,
  lint: boolean
}

interface INeatoUserConfig {
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
  webpack?: any | undefined | null,
  ava?: any | undefined | null
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
  stack?: string
}

type NeatoBuildTarget = 'build' | 'develop' | 'install' | 'lint' | 'test'

// TODO: IAvaConfig
// TODO: IWebpackConfig
// TODO: IPage
// TODO: ILoader
