import { Router } from "express";
import { createRecipe, deleteRecipe, getAllRecipes, getRecipeById, getRecipesByCategory, updateRecipe } from "../controllers/recipeController.js";
import verifyRecipeFields from "../middellewars/verifyRecipeFields.js";
import verifyUser from "../middellewars/verifyUser.js";



const recipesRouter = Router()


recipesRouter.get('/recipes', getAllRecipes)

recipesRouter.get('/recipes/:id', getRecipeById)

recipesRouter.get('/recipes/category/:category', getRecipesByCategory)


recipesRouter.post('/recipes',verifyRecipeFields, verifyUser ,createRecipe)

recipesRouter.put('/recipes/:id', updateRecipe)

recipesRouter.delete('/recipes/:id',  deleteRecipe)

export default recipesRouter