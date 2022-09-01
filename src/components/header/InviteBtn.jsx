const InviteBtn = ({ onClick }) => {
  return (
    <a
      href="#"
      className="text--link--nav p-[0.875rem] text-white bg-black w-full inline-block
      duration-300 hover:bg-grey hover:text-black focus:bg-grey focus:text-black
      md:w-max md:py-3 md:px-6"
      onClick={onClick}
    >
      get an invite
    </a>
  );
};

export default InviteBtn;
