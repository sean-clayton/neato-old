## Helpers

### Environment Variables

- You have access to the following variables:
  - `__DEV__`
    - `true` when `NODE_ENV` is `"development"`
  - `__PROD__`
    - `true` when `NODE_ENV` is `"production"`
  - `__TEST__`
    - `true` when `NODE_ENV` is `"test"`
  - `process.env.NODE_ENV`
    - String value of `NODE_ENV`. Useful if you're looking for a different `NODE_ENV` value that isn't covered by `__DEV__`, `__PROD__`, or `__TEST__`.

### Offline Support

Offline support via serviceworkers is available to Neato projects. There is one step of manual configuration needed, though.

```js
require('offline-plugin/runtime').install();
```

You need to run that script at _runtime_, so preferably your entry JavaScript file.

[Learn more about offline-plugin](https://github.com/NekR/offline-plugin).

### Module Resolution

There are a few common places to store modules. Neato looks at these places so it's easy for you to import without moving up and down your file system tree. We automatically look for modules in the following locations:

- Neato's `node_modules` folder.
- Your project's `node_modules` folder.
- Your project's `src` folder.

This way you can run the following code:

```sh
# In your terminal
npm install --save react react-dom react-toggle normalize.css
```

```js
// Inside a .js file
import React from 'react' // Sees the react module in your node_modules
import ReactDOM from 'react-dom' // Sees the react-dom module in your node_modules
import Toggle from 'react-toggle' // Sees the react-toggle module in your node_modules

import 'normalize.css/normalize.css' // Sees normalize.css' bundle CSS and applies it
import 'react-toggle/style.css' // Sees react-toggle's bundled stylesheet and applies it
import 'styles/app.css' // Looks in src/styles for app.css and applies them

if (__PROD__) require('offline-plugin/runtime').install() // Sees the offline-plugin in Neato's node_modules directory

const App = () =>
  <Toggle />

ReactDOM.render(<App />, document.getElementById('cool-app-goes-here'))
```

This will render a toggle from react-toggle with its default styles applied, along with Normalize.css and whatever is in your `app.css` file.
