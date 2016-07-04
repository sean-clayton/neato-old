interface INeatoConfig {
  port: number,
  neato: string,
  hotReloading: boolean,
  optimize: boolean,
  defineNodeEnv: boolean,
  clean: boolean,
  coverage: boolean,
  lint: boolean,
  pages?: string[],
  disabledLoaders?: string[],
  javascript?: any,
  webpack?: any,
  ava?: any
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
  javascript?: any | undefined,
  webpack?: any | undefined,
  ava?: any | undefined
}

interface INeato {
  [propName: string]: any
  run(): any,
  cli: any
}

interface INeatoError {
  name: string,
  message: string,
  stack?: string
}

interface Error {
  stack?: string
}

// TODO: IAvaConfig
// TODO: IJavascriptConfig
// TODO: IWebpackConfig
// TODO: IPage
// TODO: ILoader
