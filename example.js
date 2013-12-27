
var rt = require('./');
var microtime = require('microtime');
var koa = require('koa');
var app = koa();

app.use(rt({timer: microtime}));

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
