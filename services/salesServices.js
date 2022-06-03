const salesModels = require('../models/salesModels');
const CustomError = require('../utils/CustomError');

const getAllSales = async () => {
  const sales = await salesModels.getAllSales();
  
  if (!sales) throw new CustomError(404, 'Sales Not Found');
  return sales;
};

const getSaleByID = async (id) => {
  const [sale] = await salesModels.getSaleByID(id);
  
  if (!sale) throw new CustomError(404, 'Sale not found');
  return sale;
};

module.exports = {
  getAllSales,
  getSaleByID,
};
