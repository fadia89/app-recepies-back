const verifyRecipeFields = async (req, res, next) => {
    try {
      const {title,description,ingredients,instructions,preparation_Time,cooking_Time,servings,category} = req.body;
      console.log(req.body)
      // Vérification que tous les champs nécessaires sont présents
      if (!title ||!description ||!ingredients ||!instructions ||!preparation_Time ||!cooking_Time ||!servings ||!category) {
        return res.status(409).json({
          message: 'Tous les champs (title,description,ingredients,instructions,preparation_Time,cooking_Time,servings,category) sont nécessaires'
        });
      }
  
      // Si la validation passe, appeler next pour passer au middleware suivant
      next(); // validateurs
  
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
   export default verifyRecipeFields