import { Router } from "express";
import { createRecipe, deleteRecipe, getAllRecipes, getRecipeById, updateRecipe } from "../controllers/recipeController.js";
import verifyRecipeFields from "../middellewars/verifyRecipeFields.js";



const recipesRouter = Router()

recipesRouter.get('/recipes', getAllRecipes)
recipesRouter.get('/recipes/:id', getRecipeById)

recipesRouter.post('/recipes',verifyRecipeFields ,createRecipe)

recipesRouter.put('/recipes/:id', updateRecipe)

recipesRouter.delete('/recipes/:id',  deleteRecipe)

export default recipesRouter