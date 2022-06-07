const rescue = require('express-rescue');
const productService = require('../services/productServices');

// -------------------------- SEARCH -------------------------------

const getAllProducts = rescue(async (_req, res) => {
  const products = await productService.getAllProducts();
  res.status(200).json(products);
});

const getProductByID = rescue(async (req, res) => {
  const { id } = req.params;
  const product = await productService.getProductByID(id);
  res.status(200).json(product);
});

// -------------------------- INSERT --------------------------------

const insertProduct = rescue(async (req, res) => {
  const product = req.body;
  const insertion = await productService.insertProduct(product);
  res.status(201).json(insertion);
});

// --------------------------- UPDATE --------------------------------

const updateProduct = rescue(async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  const update = await productService.updateProduct(id, product);
  res.status(200).json(update);
});

// ---------------------------- DELETE ------------------------------

const deleteProduct = rescue(async (req, res) => {
  const { id } = req.params;
  await productService.deleteProduct(id);
  res.status(204).json();
});

module.exports = {
  getAllProducts,
  getProductByID,
  insertProduct,
  updateProduct,
  deleteProduct,
};