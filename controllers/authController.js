import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import User from'../models/users.js';

 const JWT_SECRET = process.env.JWT_SECRET;

export  const createUser = async (req, res) => {
    const {first_Name, last_Name, email, password, created_at} = req.body;
    console.log(req.body)
        try{ 
            const emailverification = await User.find({email});
            if (emailverification){
                return res.status(409).json('Email already taken');
            }
            const salt =  await bcrypt.genSalt(10) 
            const hashedPassword = await bcrypt.hash(password, salt)

            const newUser =  await User.create({
                first_Name,
                last_Name,
                email,
                password: hashedPassword
            })
            
         
        }catch (err) {
            console.log(err);  
            return res.status(500).json({ message: 'Internal server error' }); 
        }

};

export const loginUser = async (req,res) => {
    const {email, password} = req.body;
   
   
    try{
      
  
  
    }catch (err) {
    console.log(err);  
    return res.status(500).json({ message: 'Internal server error' }); 
  }
};