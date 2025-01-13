import  Express, { Router } from "express";
import {registerController,loginController,testController, forgotpasswordcontroller, updateProfileController, getOrdersController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object 
const router = Express.Router();

//routing 
//register || method post
router.post('/register',registerController)

//login || post 
router.post('/login',loginController)

// forgot password || post  
router.post('/forgot-password',forgotpasswordcontroller) 

//test routes 
router.get('/test', testController,requireSignIn,isAdmin)

//protected user route  auth 
router.get("/user-auth" ,requireSignIn,(req,res)=>{
    res.status(200).send({ ok:true});
});

//protected admin route  auth 
router.get("/admin-auth" ,requireSignIn,isAdmin, (req,res)=>{
    res.status(200).send({ ok:true});
});

//update profile 
router.put('/profile', requireSignIn ,updateProfileController )

//orders 
router.get('/orders', requireSignIn, getOrdersController)

// //all orders 
// router.get('/all-orders', requireSignIn, getAllOrdersController)

// //order status update 
// router.put("/order-status/:orderId", requireSignIn, isAdmin ,orderStatusController)

export default router


