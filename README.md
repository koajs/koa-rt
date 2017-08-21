koa-rt
======

[![Build Status](https://secure.travis-ci.org/dead-horse/koa-rt.png)](http://travis-ci.org/dead-horse/koa-rt)

koa rt. can be custom with microtime.

## Usage

```js
var koa = require('koa');
var rt = require('koa-rt');
var app = koa();

app.use(rt());

app.use(function *(next){
  yield sleep(150);
  this.body = 'Hello';
});

function sleep(ms) {
  return function(done){
    setTimeout(done, ms);
  };
}

app.listen(7001);

console.log('listening on port 7001');

```

## License
MIT
