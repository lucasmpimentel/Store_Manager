const productModels = require('../models/productModels');
const CustomError = require('../utils/CustomError');

const getAllProducts = async () => {
  const products = await productModels.getAllProducts();
  
  if (!products) throw new CustomError(404, 'Products not found');
  return products;
}

const getProductByID = async (id) => {
  const [product] = await productModels.getProductByID(id);
  
  if (!product) throw new CustomError(404, 'Product not found');
  return product;
}

module.exports = {
  getAllProducts,
  getProductByID,
}