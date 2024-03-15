import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const [recipes, setRecipes]= useState([])

    useEffect(()=>{
        fetch("./public/recipesdata.json")
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    console.log(recipes);
    return (
        <div className="w-2/3 grid lg:grid-cols-2 gap-8">
            {
                recipes.map(recipe=><Recipe key={recipe.id} recipe={recipe}></Recipe>)
            }
        </div>
    );
};

export default Recipes;