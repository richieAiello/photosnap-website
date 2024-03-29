import arrowLight from '../../assets/icons/arrow-light.svg';

const InviteArrowBtn = ({ className }) => {
  return (
    <a
      href="#"
      className={`inline-flex items-center decoration-white hover:underline ${className}`}
    >
      <span className="text--link mr-[1.625rem] text-white">
        Get An Invite
      </span>
      <img src={arrowLight} alt="" className="inline-block" />
    </a>
  );
};

export default InviteArrowBtn;
