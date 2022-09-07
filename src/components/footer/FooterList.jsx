import { NavLink } from 'react-router-dom';

const FooterList = props => {
  return (
    <ul className="grid gap-y-5 mb-16 text-white md:grid-flow-col md:gap-x-6 md:mb-[4.5rem]">
      <li>
        <NavLink to="/" className="text--link">
          home
        </NavLink>
      </li>
      <li>
        <NavLink to="/gallery" className="text--link">
          stories
        </NavLink>
      </li>
      <li>
        <NavLink to="/features" className="text--link">
          features
        </NavLink>
      </li>
      <li>
        <NavLink to="/pricing" className="text--link">
          pricing
        </NavLink>
      </li>
    </ul>
  );
};

export default FooterList;
