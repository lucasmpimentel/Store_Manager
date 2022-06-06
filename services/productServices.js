const productModels = require('../models/productModels');
const CustomError = require('../utils/CustomError');

// ---------------------- SEARCH ----------------------------

const getAllProducts = async () => {
  const products = await productModels.getAllProducts();
  
  if (!products) throw new CustomError(404, 'Products not found');
  return products;
};

const getProductByID = async (id) => {
  const [product] = await productModels.getProductByID(id);
  
  if (!product) throw new CustomError(404, 'Product not found');
  return product;
};

// ---------------------- INSERT -----------------------------

const insertProduct = async (product) => {
  const productsDB = await productModels.getAllProducts();
  
  productsDB.filter((item) => {
    if (item.name === product.name) {
      throw new CustomError(409, 'Product already exists');
    }
    return '';
  });

  const newProductID = await productModels.insertProduct(product);
  const newProduct = { id: newProductID, ...product };

  return newProduct;
};

// ---------------------  UPDATE ----------------------------

const updateProduct = async (id, product) => {
  const productDB = await productModels.getProductByID(id);
  console.log(productDB)
  if (!productDB) throw new CustomError(404, 'Product not found');

  const newProduct = await productModels.updateProduct(id, product);
  
  return newProduct;
};

module.exports = {
  getAllProducts,
  getProductByID,
  insertProduct,
  updateProduct,
};
