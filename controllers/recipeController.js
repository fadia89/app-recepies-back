import Recipes from "../models/recipes.js"


export const getAllRecipes = async (req, res) => {
    try{
            const recipes = await Recipes.find()
            if(recipes.length < 1){
                return res.status(400).json('Aucune recette trouvée')
            }
            return res.status(200).json(recipes)
        }
        catch(err){
            console.log(err)
            return res.status(500).json('Internal server error')
        }
}

export const getRecipeById = async (req, res) => {
    const {id} = req.params
    try{
        const recipeByID = await Recipes.findById(id).populate(`user_Id`, `-password`)
        if (!recipeByID){
            return res.status(404).json('Recette introuvable')
        }
        return res.status(200).json(recipeByID)
    }
    catch(err){
        console.log(err)
        return res.status(500).json('Internal server error')
    }
}

export const getRecipesByCategory = async (req, res) => {
    const category = decodeURIComponent(req.params.category)
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Supprime les accents
        .replace(/-/g, ' ') // Remplace les tirets par des espaces
        .toLowerCase(); // Met en minuscule

    // console.log("Category recherchée :", category)

    try {
        const recipes = await Recipes.find()
        
        // Filtrer en supprimant les accents des catégories existantes
        const filteredRecipes = recipes.filter(recipe => {
            const normalizedCategory = recipe.category
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Supprime les accents de la base de données
                .toLowerCase(); // Met en minuscule pour éviter les problèmes de casse

            return normalizedCategory === category
        });

        if (filteredRecipes.length === 0) {
            return res.status(404).json('Aucune recette trouvée pour cette catégorie')
        }

        return res.status(200).json(filteredRecipes)
    } catch (err) {
        console.log(err)
        return res.status(500).json('Internal server error')
    }
}


export const createRecipe = async (req, res) => {
    const {title,description,ingredients,instructions,preparation_Time,cooking_Time,servings,category,createdAt,user_Id} = req.body;
    console.log(req.user)
    console.log(req.body)
    try{
        const newRecipe = await Recipes.create({title,description,ingredients,instructions,preparation_Time,cooking_Time,servings,category,user_Id : req.user.id})
        console.log(newRecipe)
        return res.status(201).json('La recette à bien été crée')
    }
    catch(err){
        console.log(err)
        return res.status(500).json('Internal server error')
    }
}

export const updateRecipe = async (req, res) => {
    const {id} = req.params
    try{
        const recipeByID = await Recipes.findByIdAndUpdate(id, req.body, {new : true})
        if (!recipeByID){
            return res.status(404).json('Recette introuvable')
        }
        return res.json(recipeByID)
    }
    catch(err){
        console.log(err)
        return res.status(500).json('Internal server error')
    }
}

export const deleteRecipe = async (req, res) => {
    const {id} = req.params
    try{
        const recipeByID = await Recipes.findByIdAndDelete(id)
        
        if (!recipeByID){
            return res.status(404).json('Recette introuvable')
        }
        if(deleteRecipe){
            return res.status(204).json('Recette supprimé')
        }
    }
    catch(err){
        console.log(err)
        return res.status(500).json('Internal server error')
    }
}