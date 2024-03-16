import PropTypes from "prop-types";
const Wantcookdata = ({ rec }) => {
    const {id , name } = rec
  return (
    <>
      <tr className="flex justify-between items-center mt-2 bg-slate-300 p-2 rounded-xl">
      <td>{id}</td>
      <td>{name}</td>
      <td>3</td>
      <td>3</td>
      <td><button className="btn">click me</button></td>
      </tr>
    </>
  );
};
Wantcookdata.propTypes = {
  rec:PropTypes.object,
};
export default Wantcookdata;
