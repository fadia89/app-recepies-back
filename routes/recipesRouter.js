import { Router } from "express";
import { createRecipe, getAllRecipes } from "../controllers/recipeController.js";
import verifyRecipeFields from "../middellewars/verifyRecipeFields.js";



const recipesRouter = Router()

recipesRouter.get('/recipes', getAllRecipes)

recipesRouter.post('/recipes',verifyRecipeFields ,createRecipe)



export default recipesRouter