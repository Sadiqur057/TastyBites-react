import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Recipies from "./components/Recipies/Recipies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToCook from "./components/kitchen/ToCook";
import Cooking from "./components/kitchen/Cooking"

function App() {

  // update want to cook table
  const [toCook, addToCook] = useState([]);

  const handleAddToCook = (foodItem) => {
    
    // check if the food item already exist in want to cook table
    const alreadyExist = toCook.find(
      (item) => item.recipe_id === foodItem.recipe_id
    );

    //if exist then return error toast
    if (alreadyExist) return toast.error("Already added!");

    // else add food item to want to cook table
    const newToCook = [...toCook, foodItem];
    addToCook(newToCook);
    toast.success("Added to the list");
  };


  // update total time and calories on cooking now table
  const [totalTime, setTime] = useState(0);
  const [totalCalories, setCalories] = useState(0);

  // update cooking now table
  const [cookingNow, addToCookingList] = useState([]);

  const handleAddToCookingList = (item) => {
    // add to cooking now table
    const NewCookingNowList = [...cookingNow,item]
    addToCookingList(NewCookingNowList);
    toast.success("Preparing to cook.");

    // remove from want to cook table
    const newToCook = toCook.filter(foodItem=>foodItem.recipe_id!==item.recipe_id);
    addToCook(newToCook);

    // calculate total time
    const newTotalTime = totalTime + item.preparing_time;
    setTime(newTotalTime);

    // calculate total calories
    const newTotalCalories = totalCalories + item.calories;
    setCalories(newTotalCalories);
  };

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <div className="w-[90%] md:w-5/6 g:w-4/5 mx-auto">
        <div className=" text-center my-10 md:my-16 lg:my-24">
          <h1 className="font-semibold text-2xl lg:text-4xl">Our Recipes</h1>
          <p className="mt-4 lg:mt-6 mb-6 md:mb-8 lg:mb-10 w-full md:w-3/4 lg:w-2/3 mx-auto text-sm md:text-base font-lexend text-[#150b2b99]">
          Explore our mouthwatering recipe collections filled with flavors that will tantalize your taste buds. From hearty soups to delectable desserts, we have got something for every craving.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-5 lg:col-span-7 order-2 md:order-1">
            <Recipies handleAddToCook={handleAddToCook}></Recipies>
          </div>
          <div className="border-2 border-base-200 col-span-12 md:col-span-7 lg:col-span-5 rounded-3xl py-6 md:py-8 text-center font-fira order-1 md:order-2 h-fit">
            <div>
              <h1 className="pb-2 md:pb-3 text-xl md:text-2xl font-semibold font-lexend w-4/5 mx-auto border-b-2 border-base-200">
                Want to cook: {toCook.length}
              </h1>
              <ToCook toCook={toCook} handleAddToCookingList={handleAddToCookingList}></ToCook>
            </div>
            <div>
              <h1 className="pb-2 md:pb-3 text-xl md:text-2xl font-semibold font-lexend w-4/5 mx-auto border-b-2 border-base-200 py-3 md:py-5">
                Currently cooking: {cookingNow.length}
              </h1>
              <Cooking cookingNow={cookingNow} totalTime={totalTime} totalCalories={totalCalories}></Cooking>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
