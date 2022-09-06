import Row from './Row';
import ColHead from './ColHead';
import RowHead from './RowHead';
import Cell from './Cell';
import tableData from './tableData';

const Table = props => {
  const data = tableData;

  return (
    <table role="table" className="table">
      <thead role="rowgroup">
        <Row className="table__row--head">
          {data[0].map(item => {
            return (
              <ColHead
                key={item.id}
                heading={item.heading}
                className={item.class}
                secondary={item.secondary}
              />
            );
          })}
        </Row>
      </thead>
      <tbody role="rowgroup">
        {data[1].map(item => {
          return (
            <Row key={item.id} className="table__row">
              <RowHead heading={item.heading} />
              <Cell heading="Basic" check={item.basic} />
              <Cell heading="Pro" check={item.pro} />
              <Cell heading="Business" check={item.business} />
            </Row>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
