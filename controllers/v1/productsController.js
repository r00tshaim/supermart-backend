

//format: productId, categoreyId, productName, productMRPPrice, productImage
const productsList  = [
    { id: 1, categoryId: 1, name: 'Apples', price: 9.99, image: 'https://dummyimage.com/300x200/000/fff', description: "Decription for Product 1", },
    { id: 2, categoryId: 1, name: 'Milk', price: 19.99, image: 'https://dummyimage.com/300x200/000/fff', description: "Decription for Product 2", },
    { id: 3, categoryId: 2, name: 'Paper Towels', price: 14.99, image: 'https://dummyimage.com/300x200/000/fff', description: "Decription for Product 3", },
    { id: 4, categoryId: 2, name: 'Laundry Detergent', price: 9.99, image: 'https://dummyimage.com/300x200/000/fff', description: "Decription for Product 4", },
    { id: 5, categoryId: 3, name: 'Toothpaste', price: 19.99, image: 'https://dummyimage.com/300x200/000/fff', description: "Decription for Product 5", },
    { id: 6, categoryId: 3, name: 'Shampoo', price: 14.99, image: 'https://dummyimage.com/300x200/000/fff', description: "Decription for Product 6", },
    { id: 7, categoryId: 4, name: 'Apples', price: 9.99, image: 'https://dummyimage.com/300x200/000/fff', description: "Decription for Product 7", },
    { id: 8, categoryId: 4, name: 'Milk', price: 19.99, image: 'https://dummyimage.com/300x200/000/fff', description: "Decription for Product 8", },
    { id: 9, categoryId: 2, name: 'Paper Towels', price: 14.99, image: 'https://dummyimage.com/300x200/000/fff', description: "Decription for Product 9", },
    { id: 10, categoryId: 2, name: 'Laundry Detergent', price: 9.99, image: 'https://dummyimage.com/300x200/000/fff', description: "Decription for Product 10", },
    { id: 11, categoryId: 3, name: 'Toothpaste', price: 19.99, image: 'https://dummyimage.com/300x200/000/fff', description: "Decription for Product 11", },
    { id: 12, categoryId: 3, name: 'Shampoo', price: 14.99, image: 'https://dummyimage.com/300x200/000/fff', description: "Decription for Product 12", },
];

// @desc    Fetch all products
// @route   GET /v1/api/products
// @access  Public
const getProducts = async (req, res) => {
  try{
    const products = productsList;
    res.json({ products });
  } catch(err) {
    res.json(500)
  }
};

export {
  getProducts,
};