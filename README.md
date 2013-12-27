koa-rt
======

koa rt with microtime

[![NPM](https://nodei.co/npm/koa-rt.png?downloads=true)](https://nodei.co/npm/koa-rt/)

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
