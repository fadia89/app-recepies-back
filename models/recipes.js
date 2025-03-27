import mongoose from "mongoose";
const { Schema } = mongoose;

const recipeSchema = new Schema ({
    title: {
        type: String,
        required: true, // Le titre de la recette est obligatoire
      },
      description: {
        type: String,
        required: true, // La description de la recette est obligatoire
      },
      ingredients: [
        {
          name: String,
          quantity: String,
        }
      ], // Un tableau d'ingrédients avec leur nom et quantité
      instructions: [
        {
          step: Number,
          instruction: String,
        }
      ], // Un tableau de l'ordre des étapes et les instructions
      preparation_Time: {
        type: Number, 
        required: true,
      },
      cooking_Time: {
        type: Number, 
        required: true,
      },
      servings: {
        type: Number, // Nombre de portions
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now, 
      },
      user_Id :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})
export default mongoose.model('Recipe', userSchema);