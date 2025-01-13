import jwt  from "jsonwebtoken"
import userModel from "../models/userModel.js";

// created two middleware functions for handling authentication and authorization 


//protected routes token base 
export const requireSignIn = async(req,res,next)=>{
    try {
        const decode = jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
    }
};
// requireSignIn Middleware:
// Verifies the JWT token present in the Authorization header of the request.
// If the token is valid, it decodes the token and attaches the user information to the req.user.
// Calls next() to pass control to the next middleware or route handler.
// If an error occurs during token verification, it is caught and logged.

//admin access
export const isAdmin =async(req,res,next)=>{
    try {
        const user = await userModel.findById(req.user._id);
        if(user.role !== 1){
            return res.status(401).send({
                success: false,
                message:"UnAuthorized Access",
            });
        }
        else{
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success:false,
            error,
            message:"error in admin middleware",    
        });
    }
};
// isAdmin Middleware:
// Retrieves the user based on the user ID stored in req.user._id.
// Checks if the user has the role equal to 1 (assuming 1 represents the admin role).
// If the user is an admin, it calls next() to pass control to the next middleware or route handler.
// If the user is not an admin, it sends a 401 Unauthorized response.
