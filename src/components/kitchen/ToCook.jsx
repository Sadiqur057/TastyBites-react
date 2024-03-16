import PropTypes from "prop-types";

const ToCook = ({ toCook, handleAddToCookingList }) => {
  return (
    <div>
      <div className="overflow-x-auto py-1">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th className="px-0">Name</th>
              <th className="px-5">Time</th>
              <th className="px-0">Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toCook.map((foodItem, idx) => (
              <tr key={idx} className="bg-[#28282808] text-c-data">
                <th className="pr-5">{idx+1}</th>
                <td className="px-0">{foodItem.recipe_name}</td>
                <td className="px-5">{foodItem.preparing_time} minutes</td>
                <td className="px-0">{foodItem.calories} calories</td>
                <td>
                  <button onClick={()=>handleAddToCookingList(foodItem)} className="bg-c-primary py-2 px-3 rounded-3xl text-xs md:text-sm text-black">
                    Preparing
                  </button>
                </td>
              </tr>
            ))}

            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

ToCook.propTypes = {
  toCook: PropTypes.array.isRequired,
  handleAddToCookingList: PropTypes.func
};

export default ToCook;
