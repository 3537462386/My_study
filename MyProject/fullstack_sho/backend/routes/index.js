const router = require('koa-router')();
const allTypeGoods = require('../data/allTypesGoods.js');
const goods = require('../data/goods.js');

router.get('/type', async (ctx, next) => {
    ctx.body = {
        code: '80000',
        message: '获取商品数据成功',
        data: allTypeGoods
    }
})

router.post('/goodsFind/:title', async (ctx, next) => {
    const searchTitle = ctx.params.title;
    let result = []
    let result1 = []

    allTypeGoods.forEach((type, index) => {
        type.goods.forEach(goods => {
            if (goods.name.includes(searchTitle)) {
                result.push(goods)
                goods.typeId = index
            }
        })
        type.goods1.forEach(goods1 => {
            if (goods1.name.includes(searchTitle)) {
                result.push(goods1)
                goods1.typeId = index
            }
        })
    })

    result1 = result.slice(0, result.length / 2)
    result.splice(0, result.length / 2)
    ctx.body = {
        code: '80000',
        message:'获取商品数据成功',
        data: [result, result1]
    }
})

router.post('/productDetail/:typeId/:id', async(ctx, next) => {
    let { id:idx, typeId: typeidx } = ctx.params
    // console.log(idx, typeidx, '////')
    idx = parseInt(idx)
    typeidx = parseInt(typeidx);
    console.log(idx, typeidx);
    const product = goods.goodsList.find(item => item.id === idx)
    const product1 = goods.goodsList1.find(item => item.id === idx)
    const product2 = (allTypeGoods.find(item => item.id === typeidx)).goods.filter(items => items.id === idx)
    const product3 = (allTypeGoods.find(item => item.id === typeidx)).goods1.filter(items => items.id === idx)

    ctx.body = {
        code: '80000',
        message: '获取单条商品数据成功',
        data: product || product1 || product2[0] || product3[0]
    }
})

router.get('/goodsList', async (ctx, next) => {
    ctx.body = {
        code: '80000',
        message: '获取商品数据成功',
        data: goods
    }
})
module.exports = router