import User from'../models/users.js';
import jwt from 'jsonwebtoken';



export const checkAdmin = async (req, res, next) => {
    
    const { id } = req.user;
    try {
       
        const isAdmin = await User.findById(id);

        // Vérifier si l'utilisateur est un administrateur
        if ( isAdmin.role !== 'admin') {
            return res.status(405).json({ error: 'Access refused: admin only' });
        }

        // Si l'utilisateur est un admin, on passe au middleware suivant
        next();

    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(403).json({ error: 'Invalid token: incorrect signature' });
        }
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(403).json({ error: 'Token expired, please login again' });
        }
        console.error(error);  
        return res.status(500).json({ error: 'Error while verifying the token' });
    }
};

