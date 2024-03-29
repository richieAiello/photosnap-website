import logo from '../../assets/logo-light.svg';
import FooterIcons from './FooterIcons';
import FooterList from './FooterList';
import InviteArrowBtn from '../shared-components/InviteArrowBtn';

const Footer = props => {
  return (
    <footer className="bg-black text-white py-14 relative mt-auto md:py-16">
      <div
        className="container flex flex-col items-center text-center
        md:grid md:grid-cols-2 md:grid-rows-[auto,1fr,auto] lg:grid-rows-2
        lg:grid-cols-[auto,1fr,auto] lg:gap-x-32"
      >
        <img
          src={logo}
          alt=""
          className="mb-8 lg:m-0 lg:self-start"
        />
        <FooterIcons />
        <FooterList />
        <InviteArrowBtn
          className="mb-[2.125rem] md:row-start-1 md:col-start-2 
          md:justify-self-end md:self-start md:m-0 lg:col-start-3"
        />
        <p
          className="text-[0.9375rem] leading-[19.53px] opacity-[50.25%] md:row-start-3 
          md:justify-self-end lg:row-start-2 lg:self-end"
        >
          Copyright 2019. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
