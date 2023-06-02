import logger from '../../logger/logger.js';

//format: categoreyId, categoreyName, categoreyImage
const categoriesList = [
    { id: 1, name: 'Groceries', image: 'https://dummyimage.com/300x200/000/fff' },
    { id: 2, name: 'Household', image: 'https://dummyimage.com/300x200/000/fff' },
    { id: 3, name: 'Personal Care', image: 'https://dummyimage.com/300x200/000/fff' },
    { id: 4, name: 'Groceries', image: 'https://dummyimage.com/300x200/000/fff' },
    { id: 5, name: 'Household', image: 'https://dummyimage.com/300x200/000/fff' },
    { id: 6, name: 'Personal Care', image: 'https://dummyimage.com/300x200/000/fff' },
    { id: 7, name: 'Groceries', image: 'https://dummyimage.com/300x200/000/fff' },
    { id: 8, name: 'Household', image: 'https://dummyimage.com/300x200/000/fff' },
]

// @desc    Fetch all categories
// @route   GET /v1/api/categories
// @access  Public
const getCategories = async (req, res) => {
    logger.info('getCategories');
    try{
      const categories = categoriesList;
      res.json({ categories });
    } catch(err) {
      logger.error(`Error in getCategories err=${err}`);
      res.json(500)
    }
  };
  
  export {
    getCategories,
  };