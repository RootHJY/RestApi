const Koa = require('koa');
const path = require('path');
const Router = require('koa-router');
const static = require('koa-static');
const logger = require('koa-logger');
const cors = require('koa2-cors');

const app = new Koa();





app.use(cors({
    origin: function(ctx) {
        // const whiteList = ['http://localhost:6060']; //可跨域白名单
        // let url = ctx.header.referer.substr(0, ctx.header.referer.length - 1); 
        // if(whiteList.includes(url)){
        //     return url //注意，这里域名末尾不能带/，否则不成功，所以在之前我把/通过substr干掉了
        // }
        return '*' //默认允许本地请求3000端口可跨域
        // return 'http://localhost:6060' //默认允许本地请求3000端口可跨域
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 10,
    credentials: true, // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'auth', 'deviceid', 'language', 'system'],
}))

//接口地址
const api = require('./routers/api');
const v2 = require('./routers/v2');
const auth = require('./routers/auth');
const member = require('./routers/member');
const base = require('./routers/base');


const staticPath = '../static';


app.use(logger())


app.use(static(
    path.join(__dirname, staticPath)
))



let router = new Router();

router.use('/api', api.routes(), api.allowedMethods());
router.use('/v2', v2.routes(), v2.allowedMethods());
router.use('/auth', auth.routes(), auth.allowedMethods());
router.use('/member', member.routes(), member.allowedMethods());
router.use('/base', base.routes(), base.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());


app.listen(3000, () => {
    console.log('[demo02] is starting at port 3000')
})