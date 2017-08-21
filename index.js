'use strict';

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

  return function* responseTime(next) {
    var start = timer.now();
    yield next;
    var delta = timer.now() - start;
    this.set(headerName, delta);
  };
}

module.exports = responseTime;
