//format: productId, categoreyId, productName, productMRPPrice, productImage
export const productsList  = [
    { "id": 1, "categoryId": 3, "name": "Thumbs Up", "price": 230.00, "image": "http://localhost:5555/uploads/products/product1.jpg", "description": "Decription for Product 1" },
    { "id": 2, "categoryId": 3, "name": "Maaza", "price": 100.00, "image": "http://localhost:5555/uploads/products/product2.jpg", "description": "Decription for Product 2" },
    { "id": 3, "categoryId": 4, "name": "Lays classic salted", "price": 40.00, "image": "http://localhost:5555/uploads/products/product3.jpg", "description": "Decription for Product 3" },
    { "id": 4, "categoryId": 4, "name": "Kurkure", "price": 20.00, "image": "http://localhost:5555/uploads/products/product4.webp", "description": "Decription for Product 4" },
    { "id": 5, "categoryId": 1, "name": "India gate basmati rice", "price": 400.00, "image": "http://localhost:5555/uploads/products/product5.webp", "description": "Decription for Product 5" },
    { "id": 6, "categoryId": 3, "name": "Natural Litchi", "price": 49.00, "image": "http://localhost:5555/uploads/products/product6.jpg", "description": "Decription for Product 2" },
    { "id": 7, "categoryId": 1, "name": "Saffola Gold Refined Oil", "price": 165.99, "image": "http://localhost:5555/uploads/products/product7.jpg", "description": "Decription for Product 6" },
    { "id": 8, "categoryId": 1, "name": "Aashirvaad Shudh Chakki Atta", "price": 494.00, "image": "http://localhost:5555/uploads/products/product8.webp", "description": "Decription for Product 7" },
    { "id": 9, "categoryId": 1, "name": "Amul Mango Shrikhand", "price": 115.00, "image": "http://localhost:5555/uploads/products/product9.webp", "description": "Decription for Product 8" },
    { "id": 10, "categoryId": 2, "name": "Mamaearth Vitamin C Face Wash", "price": 259.00, "image": "http://localhost:5555/uploads/products/product10.webp", "description": "Decription for Product 9" },
    { "id": 11, "categoryId": 2, "name": "Mamaearth Charcoal Body Wash With Charcoal and Mint", "price": 299.00, "image": "http://localhost:5555/uploads/products/product11.webp", "description": "Decription for Product 10" }
]

//format: categoreyId, categoreyName, categoreyImage
export const categoriesList = [
    { "id": 1, "name": "Groceries", "image": "http://localhost:5555/uploads/categories/grocery.png" },
    { "id": 2, "name": "Beauty & Personal Care", "image": "http://localhost:5555/uploads/categories/beauty-care.png" },
    { "id": 3, "name": "Beverages", "image": "http://localhost:5555/uploads/categories/beverages.png" },
    { "id": 4, "name": "Snacks & Branded Foods", "image": "http://localhost:5555/uploads/categories/snacks.png" },
    { "id": 5, "name": "Home & Kitchen", "image": "http://localhost:5555/uploads/categories/kitchen.png" },
    { "id": 6, "name": "Fashion", "image": "http://localhost:5555/uploads/categories/fashion.png" },
    { "id": 7, "name": "Sports & Toys", "image": "http://localhost:5555/uploads/categories/sports.png" }
]

//format: offerId, categoryId, offerLabel, maxDiscount, maxDiscountValue, offerImage
export const categoriesOffers = [
    {"id": 1001, "categoryId": 1, "label": "Upto 30% off", "discount": "30%", "maxDiscountValue": "100", "image": "http://localhost:5555/uploads/300x200-000-fff.webp" },
    {"id": 1002, "categoryId": 4, "label": "Upto 10% off", "discount": "10%", "maxDiscountValue": "50", "image": "http://localhost:5555/uploads/300x200-000-fff.webp" },
    {"id": 1003, "categoryId": 5, "label": "Upto 50% off", "discount": "50%", "maxDiscountValue": "500", "image": "http://localhost:5555/uploads/300x200-000-fff.webp" },
    {"id": 1004, "categoryId": 3, "label": "Upto 30% off", "discount": "30%", "maxDiscountValue": "100", "image": "http://localhost:5555/uploads/300x200-000-fff.webp" },
    {"id": 1005, "categoryId": 8, "label": "Upto 50% off", "discount": "50%", "maxDiscountValue": "500", "image": "http://localhost:5555/uploads/300x200-000-fff.webp" },
    {"id": 1006, "categoryId": 7, "label": "Upto 10% off", "discount": "10%", "maxDiscountValue": "50", "image": "http://localhost:5555/uploads/300x200-000-fff.webp" },
    {"id": 1007, "categoryId": 3, "label": "Upto 25% off", "discount": "25%", "maxDiscountValue": "90", "image": "http://localhost:5555/uploads/300x200-000-fff.webp" }
]

//format: offerId, productId, offerLabel, maxDiscount, maxDiscountValue, offerImage
export const productsOffers = [
    {"id": 1101, "productId": 12, "label": "Upto 30% off", "discount": "30%", "maxDiscountValue": "100", "image": "http://localhost:5555/uploads/300x200-000-fff.webp" },
    {"id": 1101, "productId": 9, "label": "Upto 30% off", "discount": "30%", "maxDiscountValue": "100", "image": "http://localhost:5555/uploads/300x200-000-fff.webp" },
    {"id": 1101, "productId": 5, "label": "Upto 30% off", "discount": "30%", "maxDiscountValue": "100", "image": "http://localhost:5555/uploads/300x200-000-fff.webp" },
    {"id": 1101, "productId": 7, "label": "Upto 30% off", "discount": "30%", "maxDiscountValue": "100", "image": "http://localhost:5555/uploads/300x200-000-fff.webp" },
    {"id": 1101, "productId": 4, "label": "Upto 30% off", "discount": "30%", "maxDiscountValue": "100", "image": "http://localhost:5555/uploads/300x200-000-fff.webp" },
    {"id": 1101, "productId": 10, "label": "Upto 30% off", "discount": "30%", "maxDiscountValue": "100", "image": "http://localhost:5555/uploads/300x200-000-fff.webp" },
    {"id": 1101, "productId": 1, "label": "Upto 30% off", "discount": "30%", "maxDiscountValue": "100", "image": "http://localhost:5555/uploads/300x200-000-fff.webp" },
]