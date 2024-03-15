import Recipes from "../Recipes/Recipes";

const Main = () => {
  return (
    <div className="container mx-auto p-4 lg:mt-28 mt-10">
        <div className=" text-center">
        <h1 className="text-4xl font-semibold">Our Recipes</h1>
        <p className="lg:w-2/3 mx-auto opacity-60 text- mt-6">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
        </div>
      <div className=" flex justify-between">
        {/* other component */}
        <Recipes></Recipes>
        <div>right</div>
      </div>
    </div>
  );
};

export default Main;
