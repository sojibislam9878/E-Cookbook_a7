import PropTypes from "prop-types";
import Cooking from "../Cooking/Cooking";
import Wantcook from "../Wantcook/Wantcook";

const Aside = ({recipeArray}) => {
    return (
        <div className="border flex-1 h-auto p-4 rounded-2xl">
            <Wantcook recipeArray={recipeArray}></Wantcook>
            <Cooking></Cooking>
        </div>
    );
};
Aside.propTypes = {
    recipeArray:PropTypes.array,
  };
export default Aside;