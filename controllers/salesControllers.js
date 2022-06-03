const rescue = require('express-rescue');
const salesService = require('../services/salesServices');

const getAllSales = rescue(async (_req, res, _next) => {
  const sales = await salesService.getAllSales();
  res.status(200).json(sales);
});

const getSaleByID = rescue(async (req, res, next) => {
  const { id } = req.params;
  const sale = await salesService.getSaleByID(id);
  res.status(200).json(sale);
});

module.exports = {
  getAllSales,
  getSaleByID,
}