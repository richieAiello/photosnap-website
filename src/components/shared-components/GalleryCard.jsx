import { useRef } from 'react';
import arrow from '../../assets/icons/arrow-light.svg';

const GalleryCard = ({ image, heading, author, date, path }) => {
  const linkRef = useRef(null);

  const handleCardClick = e => {
    linkRef.current.click();
  };

  return (
    <div
      className="relative h-[375px] w-[min(100%,375px)] duration-300 cursor-pointer 
      after:h-[0.375rem] after:w-full after:absolute after:-bottom-[0.375rem] after:left-0 after:block
      after:bg-gradient-to-tr after:from-grad-1 after:via-grad-2 after:to-grad-3 after:-z-10
      hover:-translate-y-8  focus:-translate-y-8"
      onClick={handleCardClick}
      tabIndex="0"
    >
      <img
        src={`./images/gallery/desktop/${image}.jpg`}
        alt=""
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
      <div className="relative flex items-end px-8 pb-10 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,.01)] to-[rgba(0,0,0,66.12)]">
        <div className="text-white w-full">
          {date && <p className="text--gallery mb-1">{date}</p>}
          <h2 className="heading--sub mb-1">{heading}</h2>
          <p className="text--gallery mb-4">{author}</p>
          <div className="before:mb-5 before:h-[1px] before:w-full before:bg-[rgba(255,255,255,0.25)] before:block">
            <a
              href={path}
              aria-label="Click to view story."
              target="_blank"
              className="flex justify-between items-center"
              ref={linkRef}
              tabIndex="-1"
            >
              <span className="text--link">Read Story</span>
              <img src={arrow} alt="" className="inline-block" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
