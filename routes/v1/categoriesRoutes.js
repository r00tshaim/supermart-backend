import express from 'express'
import {getCategories} from '../../controllers/v1/categoriesController.js'

const router = express.Router()

router.route('/')
    .get(getCategories)


export default router