## FAQ

### What if I want my own Webpack Config in my project?

It's not hard! In your `neato.config.js`, add your valid webpack configuration to the `webpack` option, like so:

```js
const myWebpackConfig = require('path/to/my/webpack/config')

module.exports = {
  ...
  webpack: myWebpackConfig
}
```
