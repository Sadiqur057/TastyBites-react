import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Recipies from "./components/Recipies/Recipies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToCook from "./components/kitchen/ToCook";

function App() {
  const [toCook, addToCook] = useState([]);
  const notify = () => toast("Wow so easy !");

  const handleAddToCook = (foodItem) => {
    const alreadyExist = toCook.find((item) => item.recipe_id === foodItem.recipe_id);
    if (alreadyExist) return toast.error("Already added!");
    const newToCook = [...toCook, foodItem];
    addToCook(newToCook);
    toast.success("Added to the list")
  };


  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <div className="w-[90%] md:w-5/6 g:w-4/5 mx-auto">
        <div className=" text-center my-10 md:my-16 lg:my-24">
          <h1 className="font-semibold text-2xl lg:text-4xl">Our Recipes</h1>
          <p className="text-c-header mt-4 lg:mt-6 mb-6 md:mb-8 lg:mb-10 w-full md:w-3/4 lg:w-2/3 mx-auto text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
            elementum mauris aenean neque.{" "}
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7">
            <Recipies handleAddToCook={handleAddToCook}></Recipies>
          </div>
          <div className="border-2 border-base-200 col-span-5 rounded-3xl py-6 md:py-8 text-center font-fira">
            <h1 className="pb-2 md:pb-3 text-xl md:text-2xl font-semibold font-lexend w-4/5 mx-auto border-b-2 border-base-200">
              Want to cook: {toCook.length}
            </h1>
            <ToCook toCook={toCook}></ToCook>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
