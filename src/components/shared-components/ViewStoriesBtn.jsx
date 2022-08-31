import { Link } from 'react-router-dom';
import arrowDark from '../../assets/icons/arrow-dark.svg';

const ViewStoriesBtn = props => {
  return (
    <Link to="/gallery" className="flex items-center hover:underline">
      <span
        className="uppercase mr-[1.625rem] text-black font-bold text-[0.75rem] 
        leading-[15.62px] tracking-[0.125rem]"
      >
        View The Stories
      </span>
      <img src={arrowDark} alt="" className="inline-block" />
    </Link>
  );
};

export default ViewStoriesBtn;
