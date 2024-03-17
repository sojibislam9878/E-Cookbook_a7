import PropTypes from "prop-types";
const Recipe = ({ recipe, handleCookBtn }) => {
  const {
    id,
    name,
    image,
    short_description,
    ingredients,
    calories,
    preparing_time,
  } = recipe;

  const combineFucntion=()=>{
    handleCookBtn(recipe)
  }

  return (
    <div className="">
      <div className="card bg-base-100 shadow-xl h-full">
        <figure>
          <img src={image} alt={id} className="w-full  object-cover" />
        </figure>
        <div className="card-body">
          <div>
            <h2 className="card-title text-2xl font-semibold mt-6">{name}</h2>
            <p className="border-b-2 opacity-60 mt-4 leading-8 pb-4">
              {short_description}
            </p>
            <h4 className="text-lg font-bold mt-6">
              Ingredients:{ingredients.length}
            </h4>
            <ul
              id="ul"
              className="list-disc pl-5 border-b-2 text-lg leading-8 opacity-70 mt-4 pb-4"
            >
              {ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between my-6">
            <div className="flex items-center gap-2 opacity-60 font-semibold">
              <span className="material-symbols-outlined">schedule</span>
              {preparing_time} minutes
            </div>
            <div className="flex items-center gap-2 opacity-60 font-semibold">
              <span className="material-symbols-outlined">
                local_fire_department
              </span>
              {calories} calories
            </div>
          </div>
          <div className="card-actions">
            <button
              onClick={combineFucntion}
              className="btn bg-[#0BE58A] rounded-full"
            >
              Want to cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Recipe.propTypes = {
  recipe: PropTypes.object,
  handleCookBtn: PropTypes.func,
};

export default Recipe;
