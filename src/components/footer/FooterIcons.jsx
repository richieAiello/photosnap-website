import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Youtube } from '../../assets/icons/youtube.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Pinterest } from '../../assets/icons/pinterest.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';

const FooterIcons = props => {
  return (
    <div className="grid grid-flow-col gap-x-[0.875rem] mb-12">
      <a href="#" className="footer__link">
        <Facebook className="footer--icon footer__icon--facebook" />
      </a>
      <a href="#" className="footer__link">
        <Youtube className="footer--icon footer__icon--youtube" />
      </a>
      <a href="#" className="footer__link">
        <Twitter className="footer--icon footer__icon--twitter" />
      </a>
      <a href="#" className="footer__link">
        <Pinterest className="footer--icon footer__icon--pinterest" />
      </a>
      <a href="#" className="footer__link">
        <Instagram className="footer--icon footer__icon--instagram" />
      </a>
    </div>
  );
};

export default FooterIcons;
