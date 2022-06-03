const connection = require('./connection');

const serialize = (sale) => ({
  saleId: sale.id,
  date: sale.date,
  productId: sale.product_id,
  quantity: sale.quantity,
})

const getAllSales = async () => {
  const [sales] = await connection.execute(
    'SELECT s.id, s.date, sp.product_id, sp.quantity '
    + 'FROM StoreManager.sales AS s '
    + 'INNER JOIN StoreManager.sales_products AS sp '
    + 'ON s.id = sp.sale_id;',
  );
  return sales.map(serialize);
};

const getSaleByID = async (id) => {
  const [sales] = await connection.execute(
    'SELECT s.id, s.date, sp.product_id, sp.quantity '
    + 'FROM StoreManager.sales AS s '
    + 'INNER JOIN StoreManager.sales_products AS sp '
    + 'ON s.id = sp.sale_id '
    + 'WHERE s.id=?;',
    [id],
  );
  return sales.map(serialize);
}

module.exports = {
  getAllSales,
  getSaleByID,
}