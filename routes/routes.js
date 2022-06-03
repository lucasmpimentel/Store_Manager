const express = require('express');
const products = require('../controllers/productControllers');
const sales = require('../controllers/salesControllers');


const routes = express.Router();

// ----------------------- PRODUCTS ----------------------- //

routes.get('/products', products.getAllProducts);
routes.get('/products/:id', products.getProductByID)

// ------------------------- SALES ------------------------ //

routes.get('/sales', sales.getAllSales);
routes.get('/sales/:id', sales.getSaleByID);

module.exports = routes
