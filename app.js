const Koa = require('koa');
const path = require('path');
const Router = require('koa-router');
const static = require('koa-static');
const logger = require('koa-logger');


//接口地址
const api = require('./routers/api');
const v2 = require('./routers/v2');


const app = new Koa();
const staticPath = '../static';

app.use(static(
    path.join(__dirname, staticPath)
))

app.use(logger())


let router = new Router();

router.use('/api', api.routes(), api.allowedMethods());
router.use('/v2', v2.routes(), v2.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());


app.listen(3000, () => {
    console.log('[demo02] is starting at port 3000')
})