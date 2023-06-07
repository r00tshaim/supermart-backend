import mongoose from 'mongoose'

const subCategorySchema = mongoose.Schema({
    name: String,
    description: String,
    image: String,
})

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    subCategories: [subCategorySchema],
}, {
    timestamp: true,
})

const subCategory = mongoose.model('subCategory', subCategorySchema)
const Category = mongoose.model('Category', categorySchema)

export default Category
export {subCategory};
