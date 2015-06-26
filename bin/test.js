#!/usr/bin/env node

var TongWen = require('../src/TongWen/Util.js');

var simp = TongWen.toSimp('測試內容');
var trad = TongWen.toTrad(simp);
console.log('簡體: %s', simp);
console.log('繁體: %s', trad);
