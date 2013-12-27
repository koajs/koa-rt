/**!
 * koa-rt - test/rt.test.js
 *
 * Copyright(c) nae team and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var koa = require('koa');
var request = require('supertest');
var microtime = require('microtime');
var rt = require('../');

function sleep(ms) {
  return function (done) {
    setTimeout(done, ms);
  };
}

describe('rt.test.js', function () {
  it('should return rt headers with microtime', function (done) {
    var app = koa();
    app.use(rt({timer: microtime}));
    app.use(function *(next) {
      yield sleep(150);
      this.body = 'Hello';
    });
    request(app.listen(0))
    .get('/')
    .expect('Hello')
    .expect('X-Response-Time', /^\d{6}$/)
    .expect(200, done);
  });

  it('should return rt headers with default timer', function (done) {
    var app = koa();
    app.use(rt({headerName: 'XRT'}));
    app.use(function *(next) {
      yield sleep(150);
      this.body = 'Hello';
    });
    request(app.listen(0))
    .get('/')
    .expect('Hello')
    .expect('XRT', /^\d{3}$/)
    .expect(200, done);
  });
});
