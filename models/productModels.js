const connection = require('./connection');

const getAllProducts = async () => {
  const [products] = await connection.execute('SELECT * FROM products;');
  return products;
};

const getProductByID = async (id) => {
  const [products] = await connection.execute(
    'SELECT * FROM products WHERE id=?;',
    [id],
  );
  return products;
};

module.exports = {
  getAllProducts,
  getProductByID,
};