import PropTypes from "prop-types";
import Cookingdata from "../Cookingdata/Cookingdata";
import Timecounter from "../Timecounter/Timecounter";
const Cooking = ({cookingRecipe}) => {
  console.log(cookingRecipe);
  const time =cookingRecipe.map(function(num){
    return num.preparing_time
})

  const calories =cookingRecipe.map(function(cal){
    return cal.calories
  })
console.log(calories);
  return (
    <div className="mt-10">
      <table className="w-full">
        <tr>
          <th colSpan={"4"} className="text-2xl font-semibold border-b-2 pb-3">
            Currently cooking: 0<span>{cookingRecipe.length}</span>
          </th>
        </tr>

        <div>
          <tr className="flex justify-between text-center items-center mt-2  p-2 rounded-xl ">
            <td className="p-4 opacity-70"></td>
            <td className="flex-1 opacity-70">Name</td>
            <td className="flex-1 opacity-70">Time</td>
            <td className="flex-1 opacity-70">Calories</td>
          </tr>
          {
            cookingRecipe.map((cRecipe , index)=><Cookingdata key={index} cRecipe={cRecipe} index={index}></Cookingdata>)
          }
        </div>
      </table>
      {
        <Timecounter time={time} calories={calories}></Timecounter>
      }
    </div>
  );
};
Cooking.propTypes = {
  cookingRecipe:PropTypes.array,
};
export default Cooking;
