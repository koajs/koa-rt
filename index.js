/**!
 * koa-rt - index.js
 * Copyright(c) 2013
 * MIT Licensed
 *
 * Authors:
 *   dead_horse <dead_horse@qq.com>
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

"use strict";

/**
 * Add X-Response-Time header field.
 *
 * @return {Function}
 * @api public
 */

function responseTime(options) {
  options = options || {};
  var timer = options.timer || Date;
  var headerName = options.headerName || 'X-Response-Time';

  return function *responseTime(next){
    var start = timer.now();
    yield* next;
    var delta = timer.now() - start;
    this.set(headerName, delta);
  };
}

module.exports = responseTime;
