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
  javascript?: any | undefined | null,
  webpack?: any | undefined | null,
  ava?: any | undefined | null
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


interface INeato extends INeatoConfig {
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
