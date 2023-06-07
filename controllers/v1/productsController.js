import logger from '../../logger/logger.js';

import Product from '../../models/productModel.js';


// @desc    Fetch all products
// @route   GET /api/v1/products
// @access  Public
const getProducts = async (req, res) => {
  logger.info('getProducts');
  try{
    const products = await Product.find();
    res.status(200).json({ products });
  } catch(err) {
    logger.error(`Error in getProducts err=${err}`);
    res.status(500)
  }
};

export {
  getProducts,
};