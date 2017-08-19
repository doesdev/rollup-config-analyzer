'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var analyze = _interopDefault(require('rollup-analyzer-plugin'));

var module$1 = {plugins: [analyze()]};

module.exports = module$1;
