import { Router } from "express";
import { getAllRecipes } from "../controllers/recipeController.js";



const recepiesRouter = Router()

recepiesRouter.get('/recipe', getAllRecipes)






export default recepiesRouter