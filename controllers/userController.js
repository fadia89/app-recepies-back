import User from '../models/users.js'

//tjr await quabd je fais un call dans la BDD
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

export const getUsersProfile = async (req, res) => {
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

 export const getUsersByID = async (req, res) => {
  console.log(req.params) // pour accéder à l'id 
  const {id} = req.params;
  try {
      const user = await User.findById(id);
      console.log(user)
      if (user.length < 1) {
        return res.status(404).json('User not found');
      }
    return res.status(200).json(user);  
    }catch (err) {
      console.log(err);  
      return res.status(500).json({ message: 'Internal server error' }); 
    }
};

export const updateUsers = async (req, res) => {
  const {id} = req.params;
  const{first_Name,last_Name,email,password} = req.body;
  try{
      const user = await User.findById(id);
      //console.log(eventByID)
      if(!user){
          return res.status(404).json({messages: 'User not found'});  
      }
      const updateUser = await user.updateOne({
        first_Name: first_Name || user.first_Name,
        last_Name: last_Name || user.last_Name,
        email: email || user.email,
        password: password || user.password,
          
      })
      return res.status(200).json({message: 'Usersuccessfully updated'});

  } catch(err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });

  }

}