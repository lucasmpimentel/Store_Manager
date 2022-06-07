const connection = require('./connection');

// --------------------- SERIALIZE ------------------------

const serializeAll = (sale) => ({
  saleId: sale.id,
  date: sale.date,
  productId: sale.product_id,
  quantity: sale.quantity,
});

const serializeByID = (sale) => ({
  date: sale.date,
  productId: sale.product_id,
  quantity: sale.quantity,
});

// ----------------------- SEARCH --------------------------

const getAllSales = async () => {
  const [sales] = await connection.execute(
    'SELECT s.id, s.date, sp.product_id, sp.quantity '
    + 'FROM StoreManager.sales AS s '
    + 'INNER JOIN StoreManager.sales_products AS sp '
    + 'ON s.id = sp.sale_id;',
  );
  return sales.map(serializeAll);
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
  return sales.map(serializeByID);
};

// ---------------------- INSERT -------------------------------

const insertSale = async (sale) => {
  const [saleInsertion] = await connection.execute(
    'INSERT INTO StoreManager.sales () VALUES ()',
  );
  
  const id = saleInsertion.insertId;
  
  sale.forEach(async ({ productId, quantity }) => {
    await connection.execute(
      'INSERT INTO StoreManager.sales_products '
      + '(sale_id, product_id, quantity) '
      + 'VALUES (?, ?, ?)',
      [id, productId, quantity],
    );
    return '';
  });
  
  return id;
};

module.exports = {
  getAllSales,
  getSaleByID,
  insertSale,
};