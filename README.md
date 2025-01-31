[![Build Status](https://github.com/kaelzhang/screen-master/actions/workflows/nodejs.yml/badge.svg)](https://github.com/kaelzhang/screen-master/actions/workflows/nodejs.yml)
[![Coverage](https://codecov.io/gh/kaelzhang/screen-master/branch/master/graph/badge.svg)](https://codecov.io/gh/kaelzhang/screen-master)

# screen-master

A library to simulate mouse and keyboard behaviors for desktop screens and touch screens
- synthersis atomic mouse and keyboard actions to complicated ones
- simulate human behaviors to bypass tuning detection as much as possible
- unify the API for both desktop and touch screens

## Install

```sh
$ npm i screen-master
```

## Usage

```js
const {
  ScreenMaster,
  Task
} = require('screen-master')

const master = new ScreenMaster()

// The default options are equivalent to the following:
master
.touchScreen(false)
.delegate(delegate)
.randomStartingPoint()

await master.click(x, y)

await master.
```

## API

### .delegate(delegate)

- **delegate**: A class instance that implements the `AtomicInputEventDelegate` interface.

## License

[MIT](LICENSE)
