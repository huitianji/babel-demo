(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.square = square;
exports.diag = diag;
//导出常量
var sqrt = exports.sqrt = Math.sqrt;
//导出函数
function square(x) {
    return x * x;
}
//导出函数
function diag(x, y) {
    return sqrt(square(x) + square(y));
}

},{}],2:[function(require,module,exports){
'use strict';

var _lib = require('./lib.js');

console.log((0, _lib.square)(11)); // 121
console.log((0, _lib.diag)(4, 3)); // 5

},{"./lib.js":1}]},{},[2]);
