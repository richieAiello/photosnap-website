import logo from '../../assets/logo-light.svg';
import FooterIcons from './FooterIcons';
import FooterList from './FooterList';
import InviteArrowBtn from '../shared-components/InviteArrowBtn';

const Footer = props => {
  return (
    <footer className="bg-black text-white py-14">
      <div className="container flex flex-col items-center text-center">
        <img src={logo} alt="" className="mb-8" />
        <FooterIcons />
        <FooterList />
        <InviteArrowBtn className="mb-[2.125rem]" />
        <p className="text-[0.9375rem] leading-[19.53px] opacity-[50.25%]">
          Copyright 2019. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
