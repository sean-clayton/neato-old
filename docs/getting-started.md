## Getting Started

### Installing Neato

Neato is a _dev_ dependency you install into a Node-based project. I'll assume you have set up your project and have a completely valid `package.json` already. Installing Neato is rather simple—you do it by running:

```sh
npm install --save-dev neato
```

We use the `--save-dev` flag because we don't want to make anyone _have_ to download Neato unless they're developing with it.

### Using Neato

When you install Neato, you'll notice that a few things changed about your project's file tree, which now looks like this:

```
.
├── .babelrc
├── .editorconfig
├── .eslintignore
├── .eslintrc
├── .gitignore
├── neato.config.js
├── package.json
├── src
│   ├── README.md
│   ├── index.html
│   └── index.js
└── tsconfig.json
```

And your `package.json` now looks like this:

```json
{
  ...
  "scripts": {
    ...
    "neato:build": "neato build",
    "neato:dev": "neato develop --port 3000",
    "neato:deploy": "cross-env NODE_ENV=production neato build --optimize",
    "neato:start": "npm run neato:dev",
    "neato:lint": "neato lint"
  },
  ...
}
```

So the new changes are:

- A bunch of new files
  - `.babelrc`
  - `.editorconfig`
  - `.eslintignore`
  - `.eslintrc`
  - `.gitignore`
  - `neato.config.js`
  - `tsconfig.json`
- Some new scripts in your own `package.json`
- A new folder called `src` with some files in it

#### Misc Meta Files

`.babelrc`, `.editorconfig`, `.eslintignore`, `.eslintrc`, and `.gitignore` are basic files meant to configure various parts of your tooling.

`.babelrc` tweaks your babel config. I wouldn't recommend changing it unless you know what you're doing.

`.editorconfig` tells (participating) IDEs and text editors how to style some basic parts of your code (whitespace, file encodings, line endings, etc). Neato includes some sane defaults, but feel free to change it.

`.eslintignore` and `.eslintrc` are configuration files for ESLint. Neato includes these for some sane defaults, but not everyone will agree with our styleguide, so feel free to change it if you know what you're doing.

`.gitignore` is for Git. If you don't use Git (you unfortunate soul), then you can safely delete this. If you _do_ use Git, this file has some sane defaults for Neato-based Git projects. Feel free to edit if you know what you're doing.

#### `neato.config.json`

Neato is completely [configurable](/docs/configuration.md "Neato Configuration Documentation"). This file hosts all the changes and configurations you wish to tweak. In a nutshell, it's a JavaScript file that exports an object. That object contains all of the configuration values that Neato will then override itself with. For more information on what goes on in there, see the [configuration documentation](/docs/configuration.md "Neato Configuration Documentation").

#### New `package.json` Scripts

Since Neato isn't a global module, you need to be able to run it via command line somehow. Luckily for us, NPM comes with a script runner through `npm run [script]`. All scripts installed by neato are prefixed with `neato:`, so don't name any of your own scripts with that! These scripts are what make Neato do its magic, so be sure to utilize them!

- `neato:build` - Compiles all `src` code into a `dist` folder. **NO** minification applied.
- `neato:dev` - Runs a development server and does all the HMR/babel stuff.
- `neato:deploy` - Just like `neato:build`, but for production builds (minification, optimizations, etc).
- `neato:start` - An alias for `neato:dev`.
- `neato:lint` - Lints all `src` code.

#### `src` Folder

There's not a lot of convention using Neato, but this folder is one. All code that will run through Neato needs to be in here. For example, all TypeScript, JSX, ES2015+/ES6+ code lives here. `src` is _hardcoded_ into Neato until we find a way to fix that<sup>[0]</sup>.

[0]: https://gitlab.com/seanclayton/neato/issues/31 "Issue to Create way to reconfigure Neato hardcoded defaults"

### Further Reading

From this point you should be able to start writing code! Neato is packed full of [features]

[features]: /docs/features/README.md "Neato Features Documentation"
