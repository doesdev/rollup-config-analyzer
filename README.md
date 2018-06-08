# rollup-config-analyzer [![NPM version](https://badge.fury.io/js/rollup-config-analyzer.svg)](https://npmjs.org/package/rollup-config-analyzer)   [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)   [![Dependency Status](https://dependencyci.com/github/doesdev/rollup-config-analyzer/badge)](https://dependencyci.com/github/doesdev/rollup-config-analyzer)   

> Mad metrics for your rollup bundles, know all the things

## rollup-config-analyzer

See what's bloating your bundle, how treeshaking has treated you, and other
great stuff. Perfect for console printing an analysis of your bundle or
integrating in your CI workflows.

### Comes in two scrumptious flavors:

#### [rollup-plugin-analyzer](https://github.com/doesdev/rollup-plugin-analyzer)
Adding as a plugin to your rollup config or build script will allow you to
print a well formatted analysis to the console upon bundling or get a full
analysis object for CI purposes.

#### [rollup-config-analyzer](https://github.com/doesdev/rollup-config-analyzer)
If using Rollup's CLI to bundle with no additional config, pass
`-c node:rollup-config-analyzer` to print a well formatted analysis to your console.

## Install

```sh
$ npm install --save-dev rollup-config-analyzer
```

## Usage

```sh
rollup -c node:rollup-config-analyzer -f cjs -o index.js module.js
```

## Results
Something like this will be logged to stderr on bundle completion
```sh
-----------------------------
Rollup File Analysis
-----------------------------
bundle size:    2.809 KB
original size:  11.384 KB
code reduction: 75.33 %
-----------------------------
file:            \test\fixtures\import-d.js
bundle space:    90.64 %
rendered size:   2.546 KB
original size:   2.57 KB
code reduction:  0.93 %
dependents:      1
  - \test\fixtures\import-c.js
-----------------------------
file:            \test\fixtures\bundle.js
bundle space:    4.27 %
rendered size:   120 Bytes
original size:   267 Bytes
code reduction:  55.06 %
dependents:      0
-----------------------------
file:            \test\fixtures\import-c.js
bundle space:    2.95 %
rendered size:   83 Bytes
original size:   161 Bytes
code reduction:  48.45 %
dependents:      1
  - \test\fixtures\import-b.js
...
```

## License

MIT © [Andrew Carpenter](https://github.com/doesdev)
