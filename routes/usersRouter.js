import { Router } from "express";
import { getAllUsers, getUsersProfile, getUsersByID, updateUsers } from "../controllers/userController.js";
import verifyUser from "../middellewars/verifyUser.js";
//import { upload } from "../middellewars/uploadFile.js";
import { createUser } from "../controllers/authController.js";



const userRouter = Router();


//userRouter.get('/users',verifyUser,getAllUsers);

userRouter.get('/users',getAllUsers);

userRouter.get('/user/:id',getUsersByID);

//userRouter.post('/register', upload.single('image'), createUser);

userRouter.get('/profile',verifyUser,getUsersProfile);


userRouter.patch('/user/:id',updateUsers);

export default userRouter