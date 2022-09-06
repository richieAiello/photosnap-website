import clsx from 'clsx';

const GridImage = ({ className, image, top, center, bottom }) => {
  return (
    // grid placement is done through picture element
    <picture className={className}>
      <source
        media="(min-width: 1440px)"
        srcSet={`./images/home/desktop/${image}.jpg`}
      />
      <source
        media="(min-width: 768px)"
        srcSet={`./images/home/tablet/${image}.jpg`}
      />
      <img
        src={`./images/home/desktop/${image}.jpg`}
        alt=""
        className={`
          object-cover h-[271px] w-full md:h-full
          ${clsx({
            'object-top': top,
            'object-center': center,
          })}  
        `}
      />
    </picture>
  );
};

export default GridImage;
