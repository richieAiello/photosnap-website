import { Link } from 'react-router-dom';
import arrowDark from '../../assets/icons/arrow-dark.svg';

const ViewStoriesBtn = props => {
  return (
    <Link to="/gallery" className="flex items-center hover:underline">
      <span className="text--link mr-[1.625rem] text-black ">
        View The Stories
      </span>
      <img src={arrowDark} alt="" className="inline-block" />
    </Link>
  );
};

export default ViewStoriesBtn;
