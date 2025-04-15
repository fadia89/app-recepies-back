import { Router } from "express";
import { getAllUsers } from "../controllers/userController.js";
import verifyUser from "../middellewars/verifyUser.js";
import { getUsersByID } from "../controllers/userController.js";
import { upload } from "../middellewars/uploadFile.js";
import { createUser } from "../controllers/authController.js";



const userRouter = Router();


userRouter.get('/users',verifyUser,getAllUsers);

userRouter.post('/register', upload.single('image'), createUser);

userRouter.get('/profile',verifyUser,getUsersByID);

export default userRouter