import Cookingdata from "../Cookingdata/Cookingdata";
import PropTypes from "prop-types";
const Cooking = ({cookingRecipe}) => {
  console.log(cookingRecipe.length);
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
            <td className=" opacity-70"></td>
            <td className="flex-1 opacity-70">Name</td>
            <td className="flex-1 opacity-70">Time</td>
            <td className="flex-1 opacity-70">Calories</td>
          </tr>
          {
            cookingRecipe.map((cRecipe , index)=><Cookingdata key={index} cRecipe={cRecipe} index={index}></Cookingdata>)
          }
        </div>
      </table>
    </div>
  );
};
Cooking.propTypes = {
  cookingRecipe:PropTypes.array,
};
export default Cooking;
