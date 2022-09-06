import useMediaQuery from '../../../hooks/useMediaQuery';
import clsx from 'clsx';

const Cell = ({ heading, check }) => {
  const tablet = useMediaQuery('(min-width: 768px)');

  return (
    <td className="table__data" role="cell">
      <span
        className={`table__label ${clsx({
          hidden: tablet,
        })}`}
        aria-hidden="true"
      >
        {heading}
      </span>
      {check ? (
        <img
          src="./images/pricing/check.svg"
          alt={`${heading} plan contains this feature.`}
          className="inline"
        />
      ) : (
        <span className="ninja">{`${heading} plan does not include this feature.`}</span>
      )}
    </td>
  );
};

export default Cell;
