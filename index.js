/*!
 * koa-rt - index.js
 * Copyright(c) 2013 dead_horse <dead_horse@qq.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */
var microtime = require('microtime');

/**
 * Add X-Response-Time header field.
 *
 * @return {Function}
 * @api public
 */

function responseTime(options) {
  options = options || {};
  var headerName = options.headerName || 'X-Response-Time';
  
  return function *responseTime(next){
    var start = microtime.now();
    yield* next;
    var delta = microtime.now() - start;
    this.set(headerName, delta);
  };
}

module.exports = responseTime;
