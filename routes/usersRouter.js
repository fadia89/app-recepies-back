import { Router } from "express";
import { getAllUsers, getUsersProfile, getUsersByID, updateUser } from "../controllers/userController.js";
import verifyUser from "../middellewars/verifyUser.js";
//import { upload } from "../middellewars/uploadFile.js";
import { createUser } from "../controllers/authController.js";
import { upload } from "../middellewars/uploadFile.js";
import { checkAdmin } from "../middellewars/chechAdmin.js";



const userRouter = Router();


//userRouter.get('/users',verifyUser,getAllUsers);

userRouter.get('/users',verifyUser,checkAdmin,getAllUsers);

userRouter.get('/user/:id',getUsersByID);

//userRouter.post('/register', upload.single('image'), createUser);

userRouter.get('/profile',verifyUser,getUsersProfile);


userRouter.patch('/user',verifyUser ,upload.single('image'),updateUser);

export default userRouter