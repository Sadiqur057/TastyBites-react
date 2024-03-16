import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipies = ({handleAddToCook}) => {
  const [recipes, addRecipe] = useState([]);

  useEffect(() => {
    fetch("recipies.json")
      .then((res) => res.json())
      .then((data) => addRecipe(data));
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {
    recipes.map(recipe=><Recipe key={recipe.recipe_id} recipe={recipe} handleAddToCook={handleAddToCook}></Recipe>)
      }
    </div>
  );
};

Recipies.propTypes = {
  handleAddToCook: PropTypes.function
};

export default Recipies;
