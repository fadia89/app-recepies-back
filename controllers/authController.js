import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import User from'../models/users.js';

 const JWT_SECRET = process.env.JWT_SECRET;

export  const createUser = async (req, res) => {
    const {first_Name, last_Name, email, password, created_at} = req.body;
    
        try{ 
            const emailverification = await User.findOne({email});
            
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
            return res.status(201).json({message: `Welcom ${first_Name}`});
            
         
        }catch (err) {
            console.log(err);  
            return res.status(500).json({ message: 'Internal server error' }); 
        }

};

export const loginUser = async (req,res) => {
    const {email, password} = req.body;
    console.log(req.body)
    try{

        const user = await User.findOne({email});
        console.log(user)
        if (!user){
            return res.status(401).json({ message: 'Email or password invalid' }); 
        }
        const comparePassword = await bcrypt.compare (password, user.password);
        if (!comparePassword){
            return res.status(401).json({ message: 'Email or password invalid' }); 
        }
        const token = await jwt.sign({ id: user._id}, JWT_SECRET);
        return res.status(200).json({ message: `Welcome ${user.first_Name}`, token });
  
  
    }catch (err) {
    console.log(err);  
    return res.status(500).json({ message: 'Internal server error' }); 
  }
};