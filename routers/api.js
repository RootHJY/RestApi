const Router = require('koa-router');
const DB = require('../mongo/db.js');

let api = new Router();

api.get('/list', async (ctx, next) => {
    var name = ctx.query.name;
    var result = await DB.find('workmate', {});
    ctx.body = result;
});


api.get('/login', async (ctx, next) => {
    var name = ctx.query.name;
    var result = await DB.find('member', { username: name });

    ctx.body = {
        code: 200,
        msg: 'success',
        data: result
    };
});


api.get('/edit', async (ctx, next) => {
    var name = ctx.query.name;
    var newName = ctx.query.newName;
    var result = await DB.update('member', { username: name }, { username: newName });
    ctx.body = {
        code: 200,
        msg: 'success',
        data: result
    };
});


api.get('/remove', async (ctx, next) => {
    var name = ctx.query.name;
    var result = await DB.remove('member', { username: name });
    ctx.body = {
        code: 200,
        msg: 'success',
        data: result
    };
});


api.get('/register', async (ctx, next) => {
    var result = await DB.add('member', {
        username: 'zhouling',
        age: 22,
        sex: '1'
    });
    ctx.body = result;
});


module.exports = api;