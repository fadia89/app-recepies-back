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