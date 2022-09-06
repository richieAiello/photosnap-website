import { NavLink } from 'react-router-dom';
import InviteBtn from './InviteBtn';

const NavMenu = ({ className, onClick }) => {
  return (
    <div
      className={`
        absolute top-[4.5rem] left-0 z-20 bg-white text-center flex-col
        w-screen h-max items-center py-8 ${className}
        md:static md:flex md:flex-row md:w-full md:items-center md:justify-between md:p-0
      `}
    >
      <ul className="grid gap-y-5 mb-5 md:grid-flow-col md:gap-x-5 md:w-max md:mb-0">
        <li>
          <NavLink
            to="/"
            className="text--link--nav text-black duration-300 hover:text-grey focus:text-grey"
            onClick={onClick}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className="text--link--nav text-black duration-300 hover:text-grey focus:text-grey"
            onClick={onClick}
          >
            Stories
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/features"
            className="text--link--nav text-black duration-300 hover:text-grey focus:text-grey"
            onClick={onClick}
          >
            Features
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pricing"
            className="text--link--nav text-black duration-300 hover:text-grey focus:text-grey"
            onClick={onClick}
          >
            Pricing
          </NavLink>
        </li>
      </ul>
      <div
        className="w-[min(100%-3rem,375px)] before:h-[1px] before:w-full before:bg-[rgba(0,0,0,.25)] 
        before:block before:mb-5 md:before:hidden md:w-max"
      >
        <InviteBtn onClick={onClick} />
      </div>
    </div>
  );
};

export default NavMenu;
