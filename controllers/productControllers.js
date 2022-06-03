const rescue = require('express-rescue');
const productService = require('../services/productServices');

const getAllProducts = rescue(async (_req, res, _next) => {
  const products = await productService.getAllProducts();
  res.status(200).json(products);
});

const getProductByID = rescue(async (req, res, _next) => {
  const { id } = req.params;
  const product = await productService.getProductByID(id);
  res.status(200).json(product);
});

module.exports = {
  getAllProducts,
  getProductByID,
};