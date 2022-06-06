const express = require('express');
const products = require('../controllers/productControllers');
const sales = require('../controllers/salesControllers');
const productsValidation = require('../middlewares/productsValidations');
const salesValidation = require('../middlewares/salesValidations');

const routes = express.Router();

// ----------------------- PRODUCTS ----------------------- //

routes.get('/products', products.getAllProducts);
routes.get('/products/:id', products.getProductByID);
routes.post(
  '/products',
  productsValidation.insertValidation,
  products.insertProduct,
);
routes.put(
  '/products/:id',
  productsValidation.insertValidation,
  products.updateProduct,
);

// ------------------------- SALES ------------------------ //

routes.get('/sales', sales.getAllSales);
routes.get('/sales/:id', sales.getSaleByID);
routes.post(
  '/sales',
  salesValidation.newSaleValidation,
);
routes.put(
  '/sales/:id',
  salesValidation.newSaleValidation,
);

module.exports = routes;
