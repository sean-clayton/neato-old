<div align="center">
  <img style="max-width:768px;" src="logo.png" />
  <br />
  <!-- Dependency Status -->
  <a href="https://david-dm.org/sean-clayton/neato-react-starterkit" title="Dependency status"><img src="https://david-dm.org/sean-clayton/neato-react-starterkit.svg"/></a>
  <!-- devDependency Status -->
  <a href="https://david-dm.org/sean-clayton/neato-react-starterkit#info=devDependencies" title="devDependency status"><img src="https://david-dm.org/sean-clayton/neato-react-starterkit/dev-status.svg"/></a>
  <!-- Build Status -->
  <a href="https://gitlab.com/seanclayton/neato-react-starterkit/commits/master"><img alt="build status" src="https://gitlab.com/seanclayton/neato-react-starterkit/badges/master/build.svg" /></a>
  <!-- Donations -->
  <a href="https://cash.me/$seanc">
    <img src="https://img.shields.io/badge/square-donate-green.svg" alt="Donate with Square Cash" />
  </a>
</div>

# Neato
A React starter kit that's pretty neat.

### About Neato

Neato is a mildly-opinionated, bare-bones, yet feature-filled, React/Redux starter kit to help you write your app the way you want to while minimizing the React project setup time.

### Features

You get the following set up for you out of the box:

- Modular CSS with [PostCSS] &amp; [react-css-modules]
- A fast unit-testing suite with [AVA], [enzyme], [expect], and coverage reporting with [nyc]
- App state management with [Redux], [redux-thunk], and [redux-saga]
- Client-side routing with [react-router]
- ES2015+ syntax support with [Babel]
- Performance analysis with [why-did-you-update] and optimization with [babel-react-optimize]
- Redux debugging with built-in support for the [Redux DevTools Chrome Extension] and [redux-logger]
- Quick error analysis with [redbox-react] and [react-transform-catch-errors]
- Code-quality checking with [eslint]

[PostCSS]: http://postcss.org/
[react-css-modules]: https://github.com/gajus/react-css-modules
[AVA]: https://github.com/avajs/ava
[enzyme]: http://airbnb.io/enzyme/
[expect]: https://github.com/mjackson/expect
[Redux]: http://redux.js.org/
[redux-thunk]: https://github.com/gaearon/redux-thunk
[redux-saga]: http://yelouafi.github.io/redux-saga/
[react-router]: https://github.com/reactjs/react-router
[nyc]: https://github.com/bcoe/nyc
[Babel]: https://babeljs.io/
[why-did-you-update]: https://github.com/garbles/why-did-you-update
[babel-react-optimize]: https://github.com/thejameskyle/babel-react-optimize
[Redux DevTools Chrome Extension]: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
[redux-logger]: https://github.com/theaqua/redux-logger
[redbox-react]: https://github.com/KeywordBrain/redbox-react
[react-transform-catch-errors]: https://github.com/gaearon/react-transform-catch-errors
[eslint]: http://eslint.org/

### Installation

#### Prerequisites

- Node >= 5.0

```sh
$ git clone https://gitlab.com/seanclayton/neato-react-starterkit.git
$ cd neato-react-starterkit
$ npm install
```

### Usage

#### Commands

_Note:_ A full list of commands can be found in the "scripts" section of [package.json](package.json)

```sh
# Start Dev Suite
$ npm start

# Start Dev Mode
$ npm run dev

# Run Tests
$ npm test

# Run Test Coverage
$ npm run cover

# Lint
$ npm run lint

# Compile a Production-Ready Bundle
$ npm run compile
```

### Known Bugs

[All issues are reported here.](https://gitlab.com/seanclayton/neato-react-starterkit/issues)

### [LICENSE](LICENSE)

COPYRIGHT &copy; 2016 Sean-Patrick Ortencio Clayton

BSD ISC License

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

<div align="center">
  <sup>Made with :heart: from <img src="https://cdn.rawgit.com/sean-clayton/13721b3d1dadcefec06279aee37688f6/raw/d739621b15b24544605bb2e5c5d3eb364a4c9842/fleur-de-lis.svg" /> Louisville, KY</sup>
</div>
