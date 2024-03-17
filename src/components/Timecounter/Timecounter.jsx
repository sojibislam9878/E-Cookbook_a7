import PropTypes from "prop-types";
const Timecounter = ({time , calories}) => {
    let totalTime =0
    for ( const t of time){
        const nt = parseInt(t)
        totalTime = totalTime+nt
    }
    console.log(totalTime)
    let totalCalories =0
    for ( const t of calories){
        const nt = parseInt(t)
        totalCalories = totalCalories+nt
    }
    console.log(totalCalories)
  return (
    <div className=" border-t-2 mt-8">
      <div className="flex justify-around mt-3">
        <div>Total Time: <span>{totalTime} Minutes</span></div>
        <div>Total Calorioes: <span>{totalCalories}</span> Calories</div>
      </div>
    </div>
  );
};
Timecounter.propTypes = {
    time:PropTypes.array,
    calories:PropTypes.array,
  };
export default Timecounter;
