const express = require('express');
const products = require('../controllers/productControllers');
const sales = require('../controllers/salesControllers');
const productsValidation = require('../middlewares/productsValidations');
const salesValidation = require('../middlewares/salesValidations');

const routes = express.Router();

// ----------------------- PRODUCTS ----------------------- //

routes.route('/products')
  .get(products.getAllProducts)
  .post(
    productsValidation.insertValidation,
    products.insertProduct,
  );

routes.route('/products/:id')
  .get(products.getProductByID)
  .put(
  productsValidation.insertValidation,
  products.updateProduct,
  )
  .delete(products.deleteProduct);

// ------------------------- SALES ------------------------ //

routes.route('/sales')
  .get(sales.getAllSales)
  .post(
  salesValidation.newSaleValidation,
  sales.insertSale,
  );

routes.route('/sales/:id')
  .get(sales.getSaleByID)
  .put(
  salesValidation.newSaleValidation,
  );

module.exports = routes;

// Aprendi essa nova forma de declarar as rotas com o Wilk,
// achei que fica bem mais organizado e legível e decidi usar.
