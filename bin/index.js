#!/usr/bin/env node
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utf8Stream = require('utf8-stream');

var _utf8Stream2 = _interopRequireDefault(_utf8Stream);

var _mapStream = require('map-stream');

var _mapStream2 = _interopRequireDefault(_mapStream);

var _chalk = require('chalk');

var y = _chalk.yellow;
var w = _chalk.white;
var Y = _chalk.yellow.bold;
var W = _chalk.white.bold;
var B = _chalk.blue.bold;
var M = _chalk.magenta.bold;
var C = _chalk.cyan.bold;
var G = _chalk.green.bold;
var R = _chalk.red.bold;

process.stdin.pipe((0, _utf8Stream2['default'])()).pipe((0, _mapStream2['default'])(function (buf, cb) {
  return cb(null, buf.toString());
})).pipe((0, _mapStream2['default'])(function (buf, cb) {
  var ln = function ln(i) {
    return buf.split('\n')[i] || '';
  };
  var doge = y('\n                Y.                      _\n                YiL                   .```.\n                Yii;                .; .;;`.\n                YY;ii._           .;`.;;;; :\n                iiYYYYYYiiiii;;;;i` ;;::;;;;               ' + M(ln(0)) + '\n            _.;YYYYYYiiiiiiYYYii  .;;.   ;;;                                        ' + B(ln(1)) + '\n         .YY' + Y('YYY') + 'YYYYYiiYYYYYYYYYYYYii;`  ;;;;\n       .YYY' + Y('YYYY$$') + 'YYiiYY$$' + Y('$$iiiY') + 'YYYYY;.ii;`..     ' + C(ln(2)) + '\n      :YYY$?  `TYiiYY' + Y('$$$$$YYYYYYY') + 'iiYYYYiYYii.                        ' + R(ln(3)) + '\n      Y$MM$:   :YYYYYY$!"``"4' + Y('YYYYY') + 'iiiYYYYiiYY.                                   ' + W(ln(4)) + '\n   `.Y:MM$$b.,dYY$$Yii" :\'   :' + (Y('YYYY') + 'llYiiYYYi'.replace(/Y+/g, function (p) {
    return w(p);
  })) + 'YYY   ' + G(ln(5)) + '\n_.._Y:`4MM$!YYYYYYYYYii,.__.diii$$' + w('YYYYYYYYYYYY') + ';' + ('                                ' + B(ln(6)) + '\n.,._Y$b`P`     "4$$$$$iiiiiiii$$$$YY$$$$$$$YiY;              ' + W(ln(7)) + '\n   `,Y`$:       :$$$$$$$$$YYYYY$$$$$$$$$YYiiYYL                          ' + Y(ln(8)) + '\n    "Y;$$.    .;PPb$`.,.``T$$YY$$$$YYYYYYiiiYYU:      ' + G(ln(9)) + '\n    ;$P$;;: ;;;;i$y$"!Y$$$b;$$$Y$YY$$YYYiiiYYiYY              ' + B(ln(10)) + '\n    $Fi$$ .. ``:iii.`-":YYYYY$$YY$$$$$YYYiiYiYYY                                     ' + M(ln(11)) + '\n    :Y$$rb ````  `_..;;i;YYY$YY$$$$$$$YYYYYYYiYY:                 ' + C(ln(12)) + '\n     :$$$$$i;;iiiiidYYYYYYYYYY$$$$$$YYYYYYYiiYYYY.      ' + R(ln(13)) + '\n      `$$$$$$$YYYYYYYYYYYYY$$$$$$YYYYYYYYiiiYYYYYY               ' + Y(ln(14)) + '\n      .i!$$$$$$YYYYYYYYY$$$$$$YYY$$YYiiiiiiYYYYYYY                              ' + W(ln(15)) + '\n     :YYiii$$$$$$$YYYYYYY$$$$YY$$$$YYiiiiiYYYYYYi\'\n').replace(/Y+/g, function (p) {
    return w(p);
  }).replace(/\$+/g, function (p) {
    return Y(p);
  }));

  cb(null, doge);
})).pipe(process.stdout);

