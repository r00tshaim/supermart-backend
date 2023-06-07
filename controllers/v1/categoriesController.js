import logger from '../../logger/logger.js';

import Category from '../../models/CategoryModel.js';

// @desc    Fetch all categories
// @route   GET /api/v1/categories
// @access  Public
const getCategories = async (req, res) => {
    logger.info('getCategories');
    try{
      const categories = await Category.find();
      res.status(200).json({ categories });
    } catch(err) {
      logger.error(`Error in getCategories err=${err}`);
      res.status(500)
    }
  };
  
  export {
    getCategories,
  };