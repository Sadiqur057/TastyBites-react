import PropTypes from "prop-types";
import caloriesImg from "../../assets/calories.svg";

const Recipe = ({ recipe, handleAddToCook }) => {
  const { recipe_name, description, recipe_image, ingredients, preparing_time, calories,  } = recipe;
  return (
    <div>
      <div className="card bg-base-100 border-2 border-base-200 rounded-3xl h-full">
        <figure className="p-4 md:p-6">
          <img className="rounded-2xl" src={recipe_image} alt="Shoes" />
        </figure>
        <div className="card-body pt-0 ">
          <h2 className="card-title .font-lexend">{recipe_name}</h2>
          <p className="font-fira text-c-secondary">{description}</p>
          <div>
            <div className="border-t-2 border-b-2 border-base-200 py-2 md:py-3 my-2 md:my-3">
              <h4 className="md:text-lg font-medium mb-3 md:mb-4">
                Ingredients: {ingredients.length}
              </h4>
              <ul>
                {ingredients.map((ingredient, idx) => (
                  <li
                    className="text-c-secondary list-disc list-inside"
                    key={idx}
                  >
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex gap-4 font-fira">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>{preparing_time} minutes</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={caloriesImg} alt="" />
              <p>{calories} calories</p>
            </div>
          </div>
          <div className="card-actions justify-end mt-3">
            <button onClick={()=>handleAddToCook(recipe)} className="btn bg-c-primary .font-lexend rounded-3xl px-6 font-medium">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
  ingredients: PropTypes.array,
};

export default Recipe;
