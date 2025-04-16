import { Router } from "express";
import { upload } from "../middellewars/uploadFile.js";



import { createUser, loginUser } from "../controllers/authController.js";

const authRouter = Router ();
const JWT_SECRET = process.env.JWT_SECRET



authRouter.post ('/register', upload.single('image'), createUser);
  
authRouter.post ('/login', loginUser);


  
export default authRouter;
