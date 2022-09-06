const Row = ({ children, className }) => {
  return (
    <tr role="row" className={className}>
      {children}
    </tr>
  );
};

export default Row;
