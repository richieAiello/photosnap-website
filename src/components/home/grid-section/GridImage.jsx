import clsx from 'clsx';

const GridImage = ({ className, image }) => {
  return (
    <img
      src={`./images/home/desktop/${image}.jpg`}
      alt=""
      className={`
          object-cover h-[271px] w-full md:h-full md:col-span-2
          ${className}
        `}
    />
  );
};

export default GridImage;
