const Router = require('koa-router');
const DB = require('../mongo/db.js');


let v2 = new Router();

v2.get('/login', async (ctx, next) => {
    var result = await DB.find('test', {});
    ctx.body = result;
});


module.exports = v2;