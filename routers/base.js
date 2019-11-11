const Router = require('koa-router');
const DB = require('../mongo/db.js');


let base = new Router();

base.get('/getBannerInfo', async (ctx, next) => {
    var result = await DB.find('banner', {});
    ctx.body = result;
});


base.get('/getNowBulletinInfo', async (ctx, next) => {
    var result = await DB.find('mock', {});
    ctx.body = result;
});


base.post('/getHelpColumn', async (ctx, next) => {
    var result = await DB.find('mock', {});
    ctx.body = {
        code: 0,
        data: [{
            lastTit: '新闻中心',
            id: 111
        }],
        msg: 'success'
    };
});


base.get('/config', async (ctx, next) => {
    var result = await DB.find('mock', {});
    ctx.body = {
        code : 0,
        data: [{
            coinCode: 'BTC',
            label: 'BTC'
        },
        {
            coinCode: 'ETH',
            label: 'ETH'
        },
        {
            coinCode: 'EOS',
            label: 'EOS'
        }]
    };
});


base.get('/getCoin', async (ctx, next) => {
    var result = await DB.find('mock', {});
    ctx.body = {
        code : 0,
        data: [{
            coinCode: 'BTC',
            label: 'BTC'
        },
        {
            coinCode: 'ETH',
            label: 'ETH'
        },
        {
            coinCode: 'EOS',
            label: 'EOS'
        }]
    };
});

base.get('/getMarket', async (ctx, next) => {
    var result = await DB.find('mock', {});
    ctx.body = {
        code : 0,
        data: [{
            coinCode: 'BTC',
            label: 'BTC'
        },
        {
            coinCode: 'ETH',
            label: 'ETH'
        },
        {
            coinCode: 'EOS',
            label: 'EOS'
        }]
    };
});



base.get('/queryQuotationByMarket', async (ctx, next) => {
    var result = await DB.find('mock', {});
    ctx.body = {
        code : 0,
        data: [{
            coinCode: 'BTC',
            label: 'BTC'
        },
        {
            coinCode: 'ETH',
            label: 'ETH'
        },
        {
            coinCode: 'EOS',
            label: 'EOS'
        }]
    };
});

base.get('/queryQuotationByContracts', async (ctx, next) => {
    var result = await DB.find('mock', {});
    ctx.body = {
        code : 0,
        data: [{
            coinCode: 'BTC',
            label: 'BTC'
        },
        {
            coinCode: 'ETH',
            label: 'ETH'
        },
        {
            coinCode: 'EOS',
            label: 'EOS'
        }]
    };
});




module.exports = base;