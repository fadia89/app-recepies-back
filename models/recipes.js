import mongoose from "mongoose";
const { Schema } = mongoose;

const recipeSchema = new Schema ({
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true, 
      },
      ingredients: {
        type: String,
        required: true
      }, 
      instructions: {
        type: String,
        required: true
      }, 
      preparation_Time: {
        type: Number, 
        required: true,
      },
      cooking_Time: {
        type: Number, 
        required: true,
      },
      servings: {
        type: Number, 
        required: true,
      },
      category: {
        type: String,
        enum: ['Entrée', 'Plat principal', 'Dessert'], 
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now(), 
      },
      user_Id :{
        type: mongoose.Schema.Types.ObjectId,
        require : true,
        ref: 'User'
    }
})
export default mongoose.model('Recipe', recipeSchema);