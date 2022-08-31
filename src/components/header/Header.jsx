import Nav from './Nav';

const Header = props => {
  return (
    <header className="h-[4.5rem] w-full bg-white flex items-center fixed top-0 left-0">
      <Nav />
    </header>
  );
};

export default Header;
