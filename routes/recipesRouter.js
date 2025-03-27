import { Router } from "express";
import { createRecipe, getAllRecipes, updateRecipe } from "../controllers/recipeController.js";
import verifyRecipeFields from "../middellewars/verifyRecipeFields.js";



const recipesRouter = Router()

recipesRouter.get('/recipes', getAllRecipes)

recipesRouter.post('/recipes',verifyRecipeFields ,createRecipe)

recipesRouter.put('/recipes/:id', updateRecipe)



export default recipesRouter