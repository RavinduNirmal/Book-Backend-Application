const ProductRepository = require('../repository/productRepository');

const ProductService = {
    createProduct: async(productData) =>{
        const {productId} = productData;
       
        const exisitngProduct = await ProductRepository.findByProductId(productId);
        if(exisitngProduct){
            throw new Error('Product with this Id already created!');
        }
        return await ProductRepository.createProduct(productData)

    }
}

module.exports = ProductService;