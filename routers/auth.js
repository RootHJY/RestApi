const Router = require('koa-router');
const DB = require('../mongo/db.js');


let auth = new Router();

auth.get('/login', async (ctx, next) => {
    var result = await DB.find('test', {});
    ctx.body = result;
});


auth.get('/userinfo', async (ctx, next) => {
    var result = await DB.find('test', {});
    let userId = ctx.cookies.get('userId')  // 这里获取参数失败
    console.log(userId)
    ctx.body = result;
});



auth.get('/register', async (ctx, next) => {
    var result = await DB.find('test', {});
    ctx.body = result;
});

module.exports = auth;