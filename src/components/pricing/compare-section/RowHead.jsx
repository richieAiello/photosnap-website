const RowHead = ({ heading }) => {
  return (
    <th scope="row" role="rowheader" className="table__heading--body">
      {heading}
    </th>
  );
};

export default RowHead;
