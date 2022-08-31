const NavShadow = props => {
  return (
    <div
      className={`
        w-screen h-[calc(100vh-4.5rem)] bg-[rgba(0,0,0,.5)]
        absolute top-[4.5rem] left-0 z-10
        ${props.className}
        md:hidden
      `}
      onClick={props.onClick}
    />
  );
};

export default NavShadow;
