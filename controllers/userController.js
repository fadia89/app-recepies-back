import User from '../models/users.js'


export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        console.log(users)
        if (users.length < 1) {
          return res.status(404).json('User not found');
        }
      return res.status(200).json(users);  
      }catch (err) {
        console.log(err);  
        return res.status(500).json({ message: 'Internal server error' }); 
      }
}