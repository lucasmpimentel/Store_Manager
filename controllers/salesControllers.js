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
  const sales = req.body;
  const insertion = await salesService.insertSale(sales);
  res.status(201).json(insertion);
});

// ---------------------- UPDATE -----------------------------

const updateSale = rescue(async (req, res) => {
  const { id } = req.params;
  const sale = req.body;
  const updated = await salesService.updateSale(id, sale);
  res.status(200).json(updated);
});

module.exports = {
  getAllSales,
  getSaleByID,
  insertSale,
  updateSale,
};
