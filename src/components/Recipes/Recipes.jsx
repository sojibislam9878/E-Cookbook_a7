import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({handleCookBtn}) => {
    const [recipes, setRecipes]= useState([])

    useEffect(()=>{
        fetch("./public/recipesdata.json")
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div className="w-2/3 grid lg:grid-cols-2 gap-8">
            {
                recipes.map(recipe=><Recipe key={recipe.id} recipe={recipe} handleCookBtn={handleCookBtn}></Recipe>)
            }
        </div>
    );
};
Recipes.propTypes = {
    handleCookBtn:PropTypes.func,
  };

export default Recipes;