import express from 'express'
import { protect } from '../../middlewares/authMiddleware.js'
import { addDeliveryAddress, getDeliveryAddressForUser } from '../../controllers/v1/deliveryController.js'

const router = express.Router()
router.route('/')
    .get(protect, getDeliveryAddressForUser)
    .post(protect, addDeliveryAddress)

export default router