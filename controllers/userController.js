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
};

export const getUsersByID = async (req, res) => {
  const {id} = req.user

  try{
    const userByID = await User.findById(id).select(`-password`)
    if (!userByID) {
      return res.status(404).json('User not found');
    }
    return res.status(200).json(userByID);

  } catch (err){
    console.log(err);  
        return res.status(500).json({ message: 'Internal server error' }); 
  }
 };
