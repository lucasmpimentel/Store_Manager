const salesModels = require('../models/salesModels');
const CustomError = require('../utils/CustomError');

// -------------------------- SEARCH ----------------------------

const getAllSales = async () => {
  const sales = await salesModels.getAllSales();
  
  if (!sales) throw new CustomError(404, 'Sales Not Found');
  return sales;
};

const getSaleByID = async (id) => {
  const sale = await salesModels.getSaleByID(id);
  
  if (sale.length === 0) throw new CustomError(404, 'Sale not found');
  return sale;
};

// -------------------------- INSERT -----------------------------

const insertSale = async (sale) => {
  const newSaleID = await salesModels.insertSale(sale);
  const newSale = {
    id: newSaleID,
    itemsSold: [...sale],
  };

  return newSale;
};

// -------------------------- UPDATE ------------------------------

const updateSale = async (id, sale) => {
  await salesModels.updateSale(id, sale);
  const result = {
    saleId: id,
    itemUpdated: [...sale],
  };

  return result;
};

module.exports = {
  getAllSales,
  getSaleByID,
  insertSale,
  updateSale,
};
