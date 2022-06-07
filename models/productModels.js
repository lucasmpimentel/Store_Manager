const connection = require('./connection');

// ------------------- SEARCH ----------------------

const getAllProducts = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products;',
  );
  return products;
};

const getProductByID = async (id) => {
  const [products] = await connection.execute(
    'SELECT * FROM products WHERE id=?;',
    [id],
  );
  return products;
};

// ------------------- INSERT ----------------------

const insertProduct = async (product) => {
  const { name, quantity } = product;
  const [insertion] = await connection.execute(
    'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?);',
    [name, quantity],
  );

  const id = insertion.insertId;
  return id;
};

// ------------------- UPDATE ------------------------

const updateProduct = async (id, product) => {
  const { name, quantity } = product;
  
  if (name) {
    const [oldProduct] = await connection.execute(
      'UPDATE StoreManager.products '
      + 'SET name = ?, quantity = ? '
      + 'WHERE id = ?;',
      [name, quantity, id],
    );
    return oldProduct;
  }

  const [oldProduct] = await connection.execute(
    'UPDATE StoreManager.products '
    + 'SET quantity = ?'
    + 'WHERE id = ?',
    [quantity, id],
  );
  return oldProduct;
};

// --------------------- DELETE --------------------------

const deleteProduct = async (id) => {
  await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?',
    [id],
  );
};

module.exports = {
  getAllProducts,
  getProductByID,
  insertProduct,
  updateProduct,
  deleteProduct,
};