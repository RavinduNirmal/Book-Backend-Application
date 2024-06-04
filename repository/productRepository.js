const Product = require('../model/product.model');

const ProductRepository = {
    createProduct:async(productData) =>{
        return await Product.create(productData);
    },
    findByProductId:async(productId) =>{
        return await Product.findOne({where:{id:productId}})
    },
    findAllProducts:async() =>{
        return await Product.findAll();
    }
}

module.exports = ProductRepository;