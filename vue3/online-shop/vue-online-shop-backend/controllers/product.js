const Model = require('../model'); //  模型
const { Product } = Model

const productController = {
    all(req, res) {
        Product.find({})
            .populate('manufacturer')
            .exec((err, products) => res.json(products))
    },
    // orm object relation mapping   table(product)->rows(实例)->model(product)
    byId(req, res){
        const idParams = req.params.id
        console.log(idParams)
        Product 
            .findOne({_id:idParams})
            .populate('manufacturer')
            .exec((err,product) => res.json(product))
    },
    create(req, res){
        // 创建
        const requestBody = req.body
        // console.log(requestBody)
        // mongodb nosql json bson document 不规则的数据
        // ORM 面向对象 
        const newProduct = new Product(requestBody)
        //简单的接口
        newProduct.save((err,saved)=> {
            if(err) {
                next(err)
                return
            }else {
                Product
                    .findOne({_id:newProduct._id})
                    .populate('manufacturer')
                    .exec((err,product) => res.json(product))
            }
        })

    },
    update(req, res){
        const idParams = req.params.id;
        const product = req.body;
        Product.updateOne({_id:idParams},{...product},(err,update) => {
            res.json(update)
        })
    },
    remove(req, res){
        const idParams = req.params.id;
        Product.findOne({_id:idParams})
            .remove((err,removed)=> res.json(idParams))
    }
}

module.exports = productController