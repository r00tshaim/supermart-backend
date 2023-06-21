import express from 'express'
import {sendotp, verifyotp} from '../../controllers/v1/authController.js'

const router = express.Router()

//to - mobile number
router.route('/sendotp/:to')
    .get(sendotp)

//to - mobile number
//code - otp
router.route('/verifyotp/:to/:code')
    .get(verifyotp)


export default router