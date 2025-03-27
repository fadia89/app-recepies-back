import { Router } from "express";
import { createRecipe, getAllRecipes } from "../controllers/recipeController.js";



const recipesRouter = Router()

recipesRouter.get('/recipes', getAllRecipes)

recipesRouter.post('/recipes', createRecipe)



export default recipesRouter