import PropTypes from "prop-types";
import Cooking from "../Cooking/Cooking";
import Wantcook from "../Wantcook/Wantcook";

const Aside = ({ recipeArray, handlePreparingBtn, cookingRecipe }) => {
  return (
    <div className="border flex-1 h-auto p-4 rounded-2xl">
      <Wantcook
        recipeArray={recipeArray}
        handlePreparingBtn={handlePreparingBtn}
      ></Wantcook>
      <Cooking cookingRecipe={cookingRecipe}></Cooking>
    </div>
  );
};
Aside.propTypes = {
  recipeArray: PropTypes.array,
  handlePreparingBtn: PropTypes.func,
  cookingRecipe: PropTypes.array,
};
export default Aside;
