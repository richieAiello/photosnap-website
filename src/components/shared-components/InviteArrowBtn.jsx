import arrowLight from '../../assets/icons/arrow-light.svg';

const InviteArrowBtn = props => {
  return (
    <a
      href="#"
      className="flex items-center decoration-white hover:underline"
    >
      <span
        className="uppercase mr-[1.625rem] text-white font-bold text-[0.75rem] 
        leading-[15.62px] tracking-[0.125rem]"
      >
        Get An Invite
      </span>
      <img src={arrowLight} alt="" className="inline-block" />
    </a>
  );
};

export default InviteArrowBtn;
