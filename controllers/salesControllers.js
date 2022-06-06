const rescue = require('express-rescue');
const salesService = require('../services/salesServices');

// ---------------------- SEARCH ----------------------------

const getAllSales = rescue(async (_req, res) => {
  const sales = await salesService.getAllSales();
  res.status(200).json(sales);
});

const getSaleByID = rescue(async (req, res) => {
  const { id } = req.params;
  const sale = await salesService.getSaleByID(id);
  res.status(200).json(sale);
});

// ---------------------- INSERT ----------------------------

const insertSale = rescue(async (req, res) => {
  res.status(200).json()
});

module.exports = {
  getAllSales,
  getSaleByID,
};
