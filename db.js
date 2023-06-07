//format: productId, categoreyId, productName, productMRPPrice, productImage
export const productsList  = [
    {name: "Thumbs Up", mrpPrice: 230.00, subCategory: "Beverages", mainCategory: "Groceries", image: "http://localhost:5555/uploads/products/product1.jpg", description: "Decription for Thumbs Up" },
    {name: "Maaza", mrpPrice: 100.00, subCategory: "Beverages", mainCategory: "Groceries", image: "http://localhost:5555/uploads/products/product2.jpg", description: "Decription for Maaza" },
    {name: "Lays classic salted", mrpPrice: 40.00, subCategory: "Snacks & Branded Foods", mainCategory: "Groceries", image: "http://localhost:5555/uploads/products/product3.jpg", description: "Decription for Lays classic salted" },
    {name: "Kurkure", mrpPrice: 20.00, subCategory: "Snacks & Branded Foods", mainCategory: "Groceries", image: "http://localhost:5555/uploads/products/product4.webp", description: "Decription for Kurkure" },
    {name: "India gate basmati rice", mrpPrice: 400.00, subCategory: "Rice & Rice Products", mainCategory: "Groceries", image: "http://localhost:5555/uploads/products/product5.webp", description: "Decription for India gate basmati rice" },
    {name: "Natural Litchi", mrpPrice: 49.00, subCategory: "Beverages", mainCategory: "Groceries", image: "http://localhost:5555/uploads/products/product6.jpg", description: "Decription for Natural Litchi" },
    {name: "Saffola Gold Refined Oil", mrpPrice: 165.99, subCategory: "Edible Oil", mainCategory: "Groceries", image: "http://localhost:5555/uploads/products/product7.jpg", description: "Decription for Saffola Gold Refined Oil" },
    {name: "Amul Mango Shrikhand", mrpPrice: 115.00, subCategory: "Dairy & Bakery", mainCategory: "Groceries", image: "http://localhost:5555/uploads/products/product9.webp", description: "Decription for Amul Mango Shrikhand" },
    {name: "Mamaearth Charcoal Body Wash With Charcoal and Mint", mrpPrice: 299.00, subCategory: "Skin Care", mainCategory: "Beauty", image: "http://localhost:5555/uploads/products/product11.webp", description: "Decription for Mamaearth Charcoal Body Wash With Charcoal and Mint" },

    {name: "Aashirvaad Shudh Chakki Atta", mrpPrice: 494.00, offerPrice: 400.00,  subCategory: "Atta, Floor and Soji", mainCategory: "Groceries", image: "http://localhost:5555/uploads/products/product8.webp", description: "Decription for Aashirvaad Shudh Chakki Atta" },
    {name: "Mamaearth Vitamin C Face Wash", mrpPrice: 259.00, offerPrice: 200.00, subCategory: "Skin Care", mainCategory: "Beauty", image: "http://localhost:5555/uploads/products/product10.webp", description: "Decription for Mamaearth Vitamin C Face Wash" },
]

//format: categoreyId, categoreyName, categoreyImage
export const mainCategoriesList = [
    {name: "Groceries", subCategorey: [
        "Dairy & Bakery", "Rice & Rice Products", "Dal & Pulses", "Edible Oil", "Atta, Floor and Soji", "Snacks & Branded Foods", "Beverages", 
    ], image: "http://localhost:5555/uploads/categories/grocery.png", description: "Decription for Groceries" },

    {name: "Beauty", subCategorey: [
        "Skin Care", "Personal Care", "Mom & Baby", "Hairs",
    ],
    image: "http://localhost:5555/uploads/categories/beauty-care.png", description: "Decription for Beauty & Personal Care" },

    {name: "Home & Kitchen", subCategorey: [
        "Disposables", "Home Decor", "Prayer & Spritiual Needs", 
    ],
    image: "http://localhost:5555/uploads/categories/kitchen.png", description: "Decription for Home & Kitchen" },

    {name: "Fashion", subCategorey: [
        "Mens Fashion", "Womens Fashion", "Childrens Fashion",
    ],
    image: "http://localhost:5555/uploads/categories/fashion.png", description: "Decription for Fashion" },

    {name: "Sports & Toys", subCategorey: [],image: "http://localhost:5555/uploads/categories/sports.png", description: "Decription for Sports & Toys" }
]

export const subCategoriesList = [
    {name: "Dairy & Bakery", mainCategory: "Groceries", image: "http://localhost:5555/uploads/subcategories/dairy-bakery.avif", description: "Decription for sub category - Dairy & Bakery"},
    {name: "Rice & Rice Products", mainCategory: "Groceries",image: "http://localhost:5555/uploads/subcategories/rice-and-rice-products.avif", description: "Decription for sub category - Rice & Rice Products"},
    {name: "Dal & Pulses", mainCategory: "Groceries",image: "http://localhost:5555/uploads/subcategories/dal-and-pulses.png", description: "Decription for sub category - Dal & Pulses"},
    {name: "Edible Oil", mainCategory: "Groceries",image: "http://localhost:5555/uploads/subcategories/edible-oil.jpg", description: "Decription for sub category - Edible Oil"},
    {name: "Atta, Floor and Soji", mainCategory: "Groceries",image: "http://localhost:5555/uploads/subcategories/atta-floor-soji.jpg", description: "Decription for sub category - Atta, Floor and Soji"},
    {name: "Snacks & Branded Foods", mainCategory: "Groceries", image: "http://localhost:5555/uploads/subcategories/snacks-branded-foods.avif", description: "Decription for sub category - Snacks & Branded Foods"},
    {name: "Beverages", mainCategory: "Groceries", image: "http://localhost:5555/uploads/subcategories/beverages.avif",description: "Decription for sub category - Beverages" },
    {name: "Skin Care", mainCategory: "Beauty", image: "http://localhost:5555/uploads/subcategories/skin-care.jpg", description: "Decription for sub category - Skin Care" }, 
    {name: "Personal Care", mainCategory: "Beauty", image: "http://localhost:5555/uploads/subcategories/personal-care.avif", description: "Decription for sub category - Personal Care" }, 
    {name: "Mom & Baby", mainCategory: "Beauty", image: "http://localhost:5555/uploads/subcategories/baby-care.jpg", description: "Decription for sub category - Mom & Baby" }, 
    {name: "Hairs", mainCategory: "Beauty", image: "http://localhost:5555/uploads/subcategories/hair-care.jpg", description: "Decription for sub category - Hairs" }, 
    {name: "Disposables", mainCategory: "Home & Kitchen", image: "http://localhost:5555/uploads/subcategories/disposables.avif", description: "Decription for sub category - Disposables" }, 
    {name: "Home Decor", mainCategory: "Home & Kitchen", image: "http://localhost:5555/uploads/subcategories/home-decor.avif", description: "Decription for sub category - Home Decor" },
    {name: "Prayer & Spritiual Needs", mainCategory: "Home & Kitchen", image: "http://localhost:5555/uploads/subcategories/prayer-spiritual-needs.avif", description: "Decription for sub category - Prayer & Spritiual Needs" },
    {name: "Mens Fashion", mainCategory: "Fashion", image: "http://localhost:5555/uploads/subcategories/men-fashion.avif", description: "Decription for sub category - Mens Fashion" },
    {name: "Womens Fashion", mainCategory: "Fashion", image: "http://localhost:5555/uploads/subcategories/women-fashion.avif", description: "Decription for sub category - Womens Fashion" },
    {name: "Childrens Fashion", mainCategory: "Fashion", image: "http://localhost:5555/uploads/subcategories/childrens-fashion.avif", description: "Decription for sub category - Childrens Fashion" },
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