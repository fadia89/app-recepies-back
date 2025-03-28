import { Router } from "express";
import { getAllUsers } from "../controllers/userController.js";
import verifyUser from "../middellewars/verifyUser.js";



const userRouter = Router();


userRouter.get('/users',verifyUser,getAllUsers);

export default userRouter