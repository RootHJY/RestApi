const Router = require('koa-router');
const DB = require('../mongo/db.js');

let api = new Router();

api.get('/login', async (ctx, next) => {

    var result = await DB.find('workmate', {});
    ctx.body = result;

});


module.exports = api;