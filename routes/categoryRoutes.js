import  Express  from "express";
import {isAdmin,requireSignIn} from "./../middlewares/authMiddleware.js";
import { categoryController, createCategoryController,updateCategoryController,singleCategoryController,deletCategoryController } from "../controllers/CategoryController.js";

const router = Express.Router()

//routes 
//create category 
router.post('/create-category', requireSignIn, isAdmin ,createCategoryController)

//update category 
router.put('/update-category/:id', requireSignIn,isAdmin,updateCategoryController)

//get category 
router.get('/get-category', categoryController)

//single category 
router.get('/single-category/:slug', singleCategoryController)

// delet category 
router.delete('/delet-category/:id', requireSignIn,isAdmin,deletCategoryController)

export default router