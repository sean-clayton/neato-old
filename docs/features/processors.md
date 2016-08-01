## Languages/Syntaxes

### ES2015+ JavaScript

- Filetypes supported: `.es6`, `.js` and `.jsx`
- Write modern JavaScript with Babel
- Hot Module Reloading by default
- Source Maps by default

### TypeScript (2.x)

- Filetypes supported: `.ts` and `.tsx`
- Transforms TypeScript into ES2015 JS, then goes through Babel
- Hot Module Reloading by default using [Awesome TypeScript]
- Generates a usable `tsconfig.json` in your project directory
- Source Maps by default

[Awesome TypeScript]: https://github.com/s-panferov/awesome-typescript-loader

### PostCSS

- Filetypes supported: `.css`, `.postcss`, and `.pcss`
- CSS Modules by default
- Source Maps by default
- Import css files with ease from `node_modules` or `src`

```css
/* Say you use a 3rd party component from NPM */
@import "react-toggle/style.css"; /* Resolves to 'node_modules/react-toggle/style.css' */

/* Or you are including another local component's CSS */
@import "components/MyComponent/MyComponent.css"; /* Resolves to 'src/components/MyComponent/MyComponent.css' */

/* How neat is that? */
```

* Use Sass-like syntax via [precss]
* Pass values from file to file via [postcss-modules-values]
* Put global styles (styles that go to global scope, such as `html` or `body`) in `src/styles`
* CSS Optimization with [cssnano], which includes [autoprefixer]
* Automatic flexbox bug fixing with [postcss-flexbugs-fixes]

[precss]: https://github.com/jonathantneal/precss
[postcss-modules-values]: https://github.com/css-modules/postcss-modules-values
[cssnano]: http://cssnano.co/
[autoprefixer]: https://github.com/postcss/autoprefixer
[postcss-flexbugs-fixes]: https://github.com/luisrudge/postcss-flexbugs-fixes

### Images

- Filetypes supported: `.png`, `.jpg`, `.jpeg`, `.gif`, and `.svg`
