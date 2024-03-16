import PropTypes from "prop-types";

const ToCook = ({ toCook }) => {
  console.log(toCook);
  return (
    <div>
      <div className="overflow-x-auto py-1">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {toCook.map((foodItem, idx) => (
              <tr key={idx} className="bg-[#28282808] text-c-data">
                <th>{idx+1}</th>
                <td>{foodItem.recipe_name}</td>
                <td>{foodItem.preparing_time} minutes</td>
                <td>{foodItem.calories} calories</td>
                <td>
                  <button className="bg-c-primary btn rounded-3xl">
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
};

export default ToCook;
