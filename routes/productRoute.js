import  Express  from "express";
import {isAdmin, requireSignIn} from '../middlewares/authMiddleware.js'
import { 
    brainTreePaymentController,
    braintreeTokenController,
    createProductController, 
    deletProductController, 
    getProductController, 
    getSingleProductController, 
    productCategoryController, 
    productCountController, 
    productFiltersController, 
    productListController, 
    productPhotoController,  
    searchProductController, 
    updateProductController } from "../controllers/productController.js";
import formidable from "express-formidable";

const router = Express.Router()

//routes
router.post('/create-product',requireSignIn,isAdmin,formidable(),createProductController)

//update product 
router.put('/update-product/:pid',requireSignIn,isAdmin,formidable(),updateProductController)

//get product 
router.get('/get-product',getProductController)

//single product 
router.get('/get-product/:slug',getSingleProductController)

// product photo 
router.get('/product-photo/:pid',productPhotoController)

//delete product 
router.delete('/delete-product/:pid',deletProductController)

//Filter route
router.post('/product-filters', productFiltersController)

//product count 
router.get('/product-count', productCountController)

//product per page 
router.get('/product-list/:page', productListController)

//search procuct controller
router.get('/search/:keyword',searchProductController)

//similar product
// router.get('related-product/:pid/:cid', realtedProductController)

//category wise product 
router.get('/product-category/:slug', productCategoryController)

//payment route

// token 
router.get('/braintree/token', braintreeTokenController )

//payments 
router.post('/braintree/payment', requireSignIn , brainTreePaymentController)

export default router 