import logger from '../../logger/logger.js';

import { categoriesList } from '../../db.js';

// @desc    Fetch all categories
// @route   GET /api/v1/categories
// @access  Public
const getCategories = async (req, res) => {
    logger.info('getCategories');
    try{
      const categories = categoriesList;
      res.json({ categories });
    } catch(err) {
      logger.error(`Error in getCategories err=${err}`);
      res.status(500)
    }
  };
  
  export {
    getCategories,
  };