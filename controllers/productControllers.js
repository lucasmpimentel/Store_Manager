const rescue = require('express-rescue');
const productService = require('../services/productServices');

const getAllProducts = rescue(async (_req, res) => {
  const products = await productService.getAllProducts();
  res.status(200).json(products);
});

const getProductByID = rescue(async (req, res) => {
  const { id } = req.params;
  const product = await productService.getProductByID(id);
  res.status(200).json(product);
});

const insertProduct = rescue(async (req, res) => {
  const product = req.body;
  const insertion = await productService.insertProduct(product);
  res.status(201).json(insertion);
});

const updateProduct = rescue(async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  const update = await productService.updateProduct(id, product);
  res.status(200).json(update);
});

module.exports = {
  getAllProducts,
  getProductByID,
  insertProduct,
  updateProduct,
};