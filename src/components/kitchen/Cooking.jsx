import PropTypes from 'prop-types';

const Cooking = ({cookingNow, totalTime, totalCalories}) => {
  return (
    <div>
      <div className="overflow-x-auto py-1">
        <table className="table">
          <thead>
            <tr>
              <th className='pr-7'></th>
              <th className="px-0">Name</th>
              <th className="px-6">Time</th>
              <th className="px-0">Calories</th>
            </tr>
          </thead>
          <tbody>
            {cookingNow.map((foodItem, idx) => (
              <tr key={idx} className="bg-[#28282808] text-c-data">
                <th>{idx+1}</th>
                <td className="px-0">{foodItem.recipe_name}</td>
                <td className="px-6">{foodItem.preparing_time} minutes</td>
                <td className="px-0">{foodItem.calories} calories</td>
              </tr>
            ))}
            <tr className='text-c-data border-b-0'>
              <td></td>
              <td></td>
              <td className="px-6">Total Time = {totalTime} minutes</td>
              <td className="pl-0 pr-6">Total Calories = {totalCalories} calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Cooking.propTypes = {
  cookingNow: PropTypes.array.isRequired,
  totalTime: PropTypes.number.isRequired,
  totalCalories: PropTypes.number.isRequired
};

export default Cooking;