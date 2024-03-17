import PropTypes from "prop-types";
const Wantcookdata = ({ rec ,inx , handlePreparingBtn}) => {
    const {name,preparing_time ,calories } = rec

  return (
    <>
      <tr className="flex justify-between items-center text-center mt-2 bg-slate-100 p-2 rounded-xl">
      <td className="p-4">{inx+1}</td>
      <td className="flex-1 opacity-70">{name}</td>
      <td className="flex-1 opacity-70">{preparing_time}</td>
      <td className="flex-1 opacity-70">{calories}</td>
      <td className="flex-1">
        <button onClick={()=>{ handlePreparingBtn(rec)}} className="btn bg-[#0BE58A] rounded-full">Preparing</button>
      </td>
      </tr>
    </>
  );
};
Wantcookdata.propTypes = {
  rec:PropTypes.object,
  inx:PropTypes.number,
  handlePreparingBtn:PropTypes.func,
};
export default Wantcookdata;
