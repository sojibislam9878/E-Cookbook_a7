import PropTypes from "prop-types";
import Wantcookdata from "../Wantcookdata/Wantcookdata";
const Wantcook = ({recipeArray}) => {
    console.log(recipeArray);
    return (
        <div>
            <table className="w-full">
                <tr ><th colSpan={"4"}> hello</th></tr>
                
                    {
                        recipeArray.map((rec,inx)=><Wantcookdata key={inx} rec={rec}></Wantcookdata>)
                    }
                
            </table>
            
        </div>
    );
};
Wantcook.propTypes = {
    recipeArray:PropTypes.array,
  };
export default Wantcook;