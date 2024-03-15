import PropTypes from "prop-types";
const Recipe = ({ recipe , handleCookBtn}) => {
  const{id, name, image ,short_description , ingredients ,calories ,preparing_time} = recipe
  
  return (
    <div>
      <div className="card bg-base-100 shadow-xl h-full">
        <figure>
          <img
            src={image}
            alt={id}
            className="w-full h-52 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="border-b-2">{short_description}</p>
            <h4>Ingredients:{ingredients.length}</h4>
            <ul id="ul" className="list-disc pl-5 border-b-2">
                {ingredients.map((ingredient , idx)=>(<li key={idx}>{ingredient}</li>))}
            </ul>
            <div className="flex justify-between">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined">schedule</span>{preparing_time} minutes</div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined">local_fire_department</span>{calories} calories</div>
            </div>
          <div className="card-actions">
            <button onClick={()=>{handleCookBtn(recipe)}} className="btn bg-[#0BE58A]">Want to cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};
Recipe.propTypes = {
  recipe: PropTypes.object,
  handleCookBtn:PropTypes.func,
};

export default Recipe;
