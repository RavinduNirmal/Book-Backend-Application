const ProductService = require("../services/productService");

const createProduct = async (req, res) => {
  try {
    const { productName, productId, category, price } = req.body;

    const product = await ProductService.createProduct({
      productName,
      productId,
      category,
      price
    });

    res.status(200).json(product);
    console.log("Hello");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports =  createProduct ;
