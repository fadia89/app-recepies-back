import { Router } from "express";
import { createRecipe, deleteRecipe, getAllRecipes, getRecipeById, getRecipesByCategory, updateRecipe } from "../controllers/recipeController.js";
import verifyRecipeFields from "../middellewars/verifyRecipeFields.js";



const recipesRouter = Router()

<<<<<<< HEAD
recepiesRouter.get('/recipes', getAllRecipes)
=======
recipesRouter.get('/recipes', getAllRecipes)
recipesRouter.get('/recipes/:id', getRecipeById)
recipesRouter.get('/recipes/category/:category', getRecipesByCategory)
>>>>>>> feature/filtreByCategory

recipesRouter.post('/recipes',verifyRecipeFields ,createRecipe)

recipesRouter.put('/recipes/:id', updateRecipe)

recipesRouter.delete('/recipes/:id',  deleteRecipe)

export default recipesRouter