import { Router } from "express";
import { getAllRecipes } from "../controllers/recipeController.js";



const recepiesRouter = Router()

recepiesRouter.get('/recipes', getAllRecipes)






export default recepiesRouter