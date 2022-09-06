import { forwardRef } from 'react';
import arrow from '../../assets/icons/arrow-light.svg';

const ReadStoryBtn = (props, ref) => {
  return (
    <a
      href={props.path}
      aria-label="Click to view story."
      target="_blank"
      className={`inline-flex justify-between items-center ${props.className}`}
      ref={ref}
      tabIndex={props.tabIndex}
    >
      <span className="text--link mr-4">Read Story</span>
      <img src={arrow} alt="" className="inline-block" />
    </a>
  );
};

export default forwardRef(ReadStoryBtn);
