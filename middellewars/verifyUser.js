import User from '../models/users.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;


const verifyUser = async (req,res,next) => {
    //console.log(req)
    
    const token = req.headers.authorization?.split(' ')[1];
  
    if (!token){
        return res.status(405).json('Access refused :invalid token')
    }

    try{
        const verify = await jwt.verify(token,JWT_SECRET)
       
        console.log(verify);
        
        if (!verify){
            return res.status(405).json('Access denied')
        }
       // Vérifier le rôle de l'utilisateur
       if (verify.role !=="admin"){
        return res.status(403).json({ error: 'Insufficient permissions' });
       }

       req.user = verify
        next();
      


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

export default verifyUser;