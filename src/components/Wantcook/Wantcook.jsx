import PropTypes from "prop-types";
import Wantcookdata from "../Wantcookdata/Wantcookdata";
const Wantcook = ({ recipeArray, handlePreparingBtn }) => {
  console.log(recipeArray.length);
  return (
    <div>
      <table className="w-full">
        <tr>
          <th colSpan={"4"} className="text-2xl font-semibold border-b-2 pb-3">
            Want to cook: 0<span>{recipeArray.length}</span>
          </th>
        </tr>

        <div>
          <tr className="flex justify-between text-center items-center mt-2  p-2 rounded-xl ">
            <td className="p-4 opacity-70"></td>
            <td className="flex-1 opacity-70">Name</td>
            <td className="flex-1 opacity-70">Time</td>
            <td className="flex-1 opacity-70">Calories</td>
            <td className="flex-1 opacity-70"></td>
          </tr>
          {recipeArray.map((rec, inx) => (
            <Wantcookdata
              key={inx}
              inx={inx}
              rec={rec}
              handlePreparingBtn={handlePreparingBtn}
            ></Wantcookdata>
          ))}
        </div>
      </table>
    </div>
  );
};
Wantcook.propTypes = {
  recipeArray: PropTypes.array,
  handlePreparingBtn: PropTypes.func,
};
export default Wantcook;
