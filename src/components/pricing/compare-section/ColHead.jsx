import useMediaQuery from '../../../hooks/useMediaQuery';
import clsx from 'clsx';

const ColHead = ({ className, heading, secondary }) => {
  const tablet = useMediaQuery('(min-width: 768px)');

  return (
    <th
      scope="col"
      role="columnheader"
      className={`${className} ${clsx({
        ninja: secondary && !tablet,
      })}`}
    >
      {heading}
    </th>
  );
};

export default ColHead;
