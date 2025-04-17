import jwt from 'jsonwebtoken';
import User from'../models/users.js';
import Recipe from '../models/recipes.js'



export const checkAdminOrOwner = async(req,res, next) => {
    console.log(req.user)
    const {id}= req.user 
    const serviceID = req.params.id


    try{
        const recipe = await Recipe.findById(id)
        const user = await User.findById(id)

        const isOwner = serviceID.user_Id === id
        const isAdmin = user.role === "admin"

         if (isOwner || isAdmin) {
            next()
         }else{
            return res.status(403).json('Acess denied')
         }

     } catch (error) {
            if (error instanceof jwt.JsonWebTokenError) {
                return res.status(403).json({ error: "Invalid token : incorrect signature" });
                }
                if (error instanceof jwt.TokenExpiredError) {
                return res.status(403).json({ error: "Token expired, please login again" });
                 }
                 return res.status(500).json({ error: "Error while verifating the token" });
        }
        
}