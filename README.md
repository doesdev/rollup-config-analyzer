# rollup-analyzer-config [![NPM version](https://badge.fury.io/js/rollup-analyzer-config.svg)](https://npmjs.org/package/rollup-analyzer-config)   [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)   [![Dependency Status](https://dependencyci.com/github/doesdev/rollup-analyzer-config/badge)](https://dependencyci.com/github/doesdev/rollup-analyzer-config)

> Analyze file sizes of rollup bundled imports

## rollup-analyzer

Rollup Analyzer gives you a quick look at what's taking up space in your bundle.

### Comes in three scrumptious flavors:

#### [rollup-analyzer-plugin](https://github.com/doesdev/rollup-analyzer-plugin)
Adding as a plugin to your rollup config or build script will print a well
formatted analysis to the console upon bundling.

#### [rollup-analyzer-config](https://github.com/doesdev/rollup-analyzer-config)
If using Rollup's CLI to bundle with no additonal config, pass
`-c node:rollup-analyzer-config` to print a well formatted analysis to your console.

#### [rollup-analyzer](https://github.com/doesdev/rollup-analyzer)
Full analysis module, giving you access to the complete analysis object or well
formatted analysis text for CI and build usage.

## Install

```sh
$ npm install --save-dev rollup-analyzer-config
```

## Usage

```sh
rollup -c node:rollup-analyzer-config -f cjs -o index.js module.js
```

## Results
Something like this will be logged to stderr on bundle completion
```sh
-----------------------------
Rollup File Analysis
-----------------------------
bundle size: 1.146 MB
-----------------------------
file: \node_modules\html5-history-api\history.js
size: 38.502 KB
percent: 3.36%
dependents: 1
  - \app\modules\page.js
-----------------------------
file: \node_modules\pikaday\pikaday.js
size: 34.683 KB
percent: 3.03%
dependents: 1
  - \app\helpers\transformer.js
...
```

## License

MIT © [Andrew Carpenter](https://github.com/doesdev)
