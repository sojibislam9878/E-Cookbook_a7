import { useState } from "react";
import Recipes from "../Recipes/Recipes";
import Aside from "../Aside/Aside";

const Main = () => {
    const [recipeArray , setRecipeArray] = useState([])
    const handleCookBtn =(recipe)=>{
        const allReadyExist = recipeArray.find(i => i.id === recipe.id)
        if (!allReadyExist) {
            const newRecieArray = [...recipeArray, recipe]
        setRecipeArray(newRecieArray)
        }else{
            alert("matha nosto naki")
        }
        
    }
    
    const [cookingRecipe, setCookingRecipe]= useState([])
    
    const handlePreparingBtn =(clickedItem)=>{
      const filterRecipeArray = recipeArray.filter(item=> item.id != clickedItem.id)
      setRecipeArray(filterRecipeArray)
      const newCookingRecipe = [...cookingRecipe , clickedItem]
      setCookingRecipe(newCookingRecipe)
  }

  return (
    <div className="container mx-auto p-4 lg:mt-28 mt-10">
        <div className=" text-center">
        <h1 className="text-4xl font-semibold">Our Recipes</h1>
        <p className="lg:w-2/3 mx-auto opacity-60 text- mt-6">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
        </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-6 mt-14">
        {/* other component */}
        <Recipes handleCookBtn={handleCookBtn} ></Recipes>
        <Aside recipeArray={recipeArray} handlePreparingBtn={handlePreparingBtn} cookingRecipe={cookingRecipe}></Aside>
      </div>
    </div>
  );
};

export default Main;
