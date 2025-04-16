import { Router } from "express";
import { createRecipe, deleteRecipe, getAllRecipes, getRecipeById, getRecipesByCategory, updateRecipe } from "../controllers/recipeController.js";
import verifyRecipeFields from "../middellewars/verifyRecipeFields.js";
import verifyUser from "../middellewars/verifyUser.js";
import { upload } from "../middellewars/uploadFile.js";



const recipesRouter = Router()


recipesRouter.get('/recipes', getAllRecipes)

recipesRouter.get('/recipe/:id', getRecipeById)

recipesRouter.get('/recipes/category/:category', getRecipesByCategory)


recipesRouter.post('/recipes',upload.single('image'),verifyRecipeFields, verifyUser ,createRecipe)

recipesRouter.put('/recipes/:id', updateRecipe)

recipesRouter.delete('/recipes/:id',  deleteRecipe)

export default recipesRouter