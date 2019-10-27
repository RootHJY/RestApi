const Router = require('koa-router');
const DB = require('../mongo/db.js');


let member = new Router();

member.post('/login', async (ctx, next) => {
    var result = await DB.find('test', {});
    const successData = {
        code: 0,
        data: {
            token: 'KMASJDI423KLKJSD9123KJDOWWOOMKDKASD'
        },
        msg: 'success'
    }
    ctx.body = successData;
});


member.get('/getMemberInfoForAPP', async (ctx, next) => {
    let loginToken = ctx.cookies.get('loginToken')  // 这里获取参数失败
    // var result = await DB.find('member', {username: "jiayan"});

    var result = {
        memberId: '5d9413f321998f3498bc251a',
        mail: '2368765922@qq.com',
        phone: '18701872611',
        mailValid: 1,
        phoneValid: 1,
        googleValid: 1,
        kycState: 2,
        legalName: 'jiayan',
        level: 2,
        pointsDeductionStatus: 2,
        isTransPwd: 1,
        currency: 'USDT',
        referralCode: '653365',
        validationStatus: 2
    }
    const successData = {
        code: 0,
        token: loginToken || '',
        data: result,
        msg: 'success'
    }

    ctx.body = successData;
});



member.get('/register', async (ctx, next) => {
    var result = await DB.find('test', {});
    ctx.body = result;
});

module.exports = member;