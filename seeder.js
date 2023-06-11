import dotenv from 'dotenv'
import {dbconnect} from './utils/dbconnect.js'

import Category, {subCategory} from './models/CategoryModel.js';
import Product, {Brand} from './models/productModel.js';
import User from './models/UserModels.js'

import { mainCategoriesList, subCategoriesList, productsList, brandList } from './db.js'


dotenv.config()

await dbconnect()

//helper functions
const seedProducts = async () => {
    for (const productData of productsList) {
        // Get the category object
        const categoryObj = await Category.findOne({ name: productData.mainCategory });
        // Get the subcategory object
        const subcategoryObj = await subCategory.findOne({ name: productData.subCategory });
        // Get the brand object
        const brandObj = await Brand.findOne({ name: productData.brand });

        // Create a new product object
        const product = new Product({
            name: productData.name,
            description: productData.description,
            image: productData.image,
            mrpPrice: productData.mrpPrice,
            offerPrice: productData.offerPrice || -1,
            brand: brandObj.id,
            category: categoryObj.id,
            subcategory: subcategoryObj.id,
            quantity: productData.quantity,
            quantityUnit: productData.quantityUnit,
        });

        // Save the product to the database
        await product.save();
    }
}

const seedMainCategories = async () => {
    for (const mainCatData of mainCategoriesList) {
        
        const subCatObjList = [] 
        for(const subCat of mainCatData.subCategorey) {
            const subCatObj = await subCategory.findOne({name: subCat})
            subCatObjList.push(subCatObj)
        }

        // Create a new subCat object
        const mainCategoryObj = new Category({
            name: mainCatData.name,
            description: mainCatData.description,
            image: mainCatData.image,
            subCategories: subCatObjList
        });

        // Save the product to the database
        await mainCategoryObj.save();        
    }
}

const seedBrands = async () => {
    for (const brandData of brandList) {
        // Create a new Brand object
        const brandObj = new Brand({
            name: brandData.name,
            image: brandData.image,
        });

        // Save the Brand to the database
        await brandObj.save();
    }
}
//end of helper functions


const importData = async () => {
    try {
        //-----------brands------------------
        console.log("Processing Brands");
        await Brand.deleteMany();

        await seedBrands();
        console.log("Done");
        //-----------end brands--------------

        //------------categories--------------
        console.log("Processing Categories");
        await Category.deleteMany()
        await subCategory.deleteMany()

        const sampleSubCategories = subCategoriesList.map(({ name, image, description }) => {
            return { name, image, description }
        })
        //console.log("sampleSubCategories=",sampleSubCategories[0])
        await subCategory.insertMany(sampleSubCategories)       

        await seedMainCategories()
        console.log("Done");
        //-------------end categories------------


        //-------------products-----------------
        console.log("Processing Products");
        await Product.deleteMany()

        await seedProducts();
        console.log("Done");
        //-------------end products-------------

        console.log('Data Imported!')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}



const destroyData = async () => {
    try {
        await subCategory.deleteMany()
        await Category.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        console.log('Data Destroyed!')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}


if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}