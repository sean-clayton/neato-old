## Configuration

### Getting Started

### Options

#### hotReloading
Turns Webpack hot-reloading on/off
- Type: `bool`
- Default: `true`
- Example: `hotReloading: true`

#### pages
Exports multiple, unrelated, HTML + JS single-page-apps
- Type: `string[]`
- Default: `undefined`
- Example: `pages: ["index", "completely-separate-app-from-index"]`

#### libraries
Exports multiple CommonJS libraries for easy sharing
- Type: `string[]`
- Default: `undefined`
- Example: `libraries: ["react-router-ii", "redux-but-cooler"]`

#### offline
Enables/disables service worker that makes your app work without an internet connection
- Type: `bool`
- Default: `true`
- Example: `offline: true`

#### devServerOptions
A valid Webpack Dev Server configuration object
- Type: `object`
- Default: `undefined`
- Example: `devServerOptions: {}`

#### disabledLoaders
Disables loaders from the default Webpack configuration.
Works great if you're overriding a loader, eg replacing the default
style loader of PostCSS with your own Sass loader.
It also works great if you're using TypeScript, but not JavaScript, or vice-versa.
See **Default Loaders** below for a list of valid loaders.
- Type: `string[]`
- Default: `undefined`
- Example: `disabledLoaders: ['typescript', 'style']`

#### javaScript
JavaScript configuration
- Type: `object`
- Default: `undefined`
- Example: `javaScript: {}`

##### javaScript.buildDependencies
List of dependencies that need to be built with Babel.
- Type: `string[]`
- Default: `undefined`
- Example: `buildDependencies: ['thing-i-installed-that-needs-babel-why', 'me-too']`

#### webpack
A valid Webpack configuration object. Useful for overriding or extending Neato's built-in webpack config. You're on your own with this stuff here.
- Type: `object`
- Default: `undefined`
- Example:

```js
// In neato.config.js
const sweetWebpackPlugin = require('@bob-the-builder/bobs-sweet-webpack-goodness')
const myWebpackConfig = {
  plugins: [
    new sweetWebpackPlugin({
      theGoods: "Dude! Sweet!"
    })
  ]
}

module.exports = {
  // ...
  webpack: myWebpackConfig
}
```

#### style
- Type: `object`
- Default: `undefined`
- Example: `style: {}`

##### style.postcssPlugins
- Type: `array`
- Default: `undefined`
- Example:

```js
const sweetPostcssPlugin = require('yo-wuddup')
const customPostcssStuff = [sweetPostcssPlugin]

module.exports = {
  // ...
  postcssPlugins: customPostcssStuff
}
```

### Default Loaders
- `javascript`
- `typescript`
- `image`
- `style`
