import PropTypes from "prop-types";
const Cookingdata = ({cRecipe , index}) => {
    console.log(cRecipe);
    const {name, preparing_time , calories}= cRecipe
    return (
        <div>
            <tr className="flex justify-between items-center text-center mt-2 bg-slate-100 p-2 rounded-xl">
      <td className="">{index+1}</td>
      <td className="flex-1 opacity-70">{name}</td>
      <td className="flex-1 opacity-70">{preparing_time}</td>
      <td className="flex-1 opacity-70">{calories}</td>
      </tr>
        </div>
    );
};
Cookingdata.propTypes = {
    cRecipe:PropTypes.array,
    index:PropTypes.number,
  };
export default Cookingdata;