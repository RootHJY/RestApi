const Router = require('koa-router');
const DB = require('../mongo/db.js');


let base = new Router();

base.get('/getBannerInfo', async (ctx, next) => {
    var result = await DB.find('banner', {});
    ctx.body = result;
});


base.get('/register', async (ctx, next) => {
    var result = await DB.find('test', {});
    ctx.body = result;
});

module.exports = base;