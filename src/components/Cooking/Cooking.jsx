const Cooking = () => {
  return (
    <div>
      <table className="w-full border-t-2 mt-4">
        <tr>
          <th colSpan={"4"}> cooking</th>
        </tr>
        <tr className="flex justify-between items-center mt-2 bg-slate-300 p-2 rounded-xl">
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>
            <button className="btn">click me</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Cooking;
