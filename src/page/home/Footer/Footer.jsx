import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';
import FooterOverlay from '../../../components/Footer/FooterOverlay';
import NewsLetter from './../../../components/Footer/NewsLetter';
 

const Footer = () => (
  <div className="app__footer section__padding mt-16" id="login">
    <FooterOverlay />
    <NewsLetter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">123 InnovateEd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-123-4567</p>
        <p className="p__opensans">info@innovateed.com</p>
      </div>

      <div className="app__footer-links_logo flex flex-col justify-center items-center">
         <h3 className='p__cormorant'>InnovateEd</h3>
        <p className="p__opensans">&quot;Empowering minds, transforming futures.&quot;</p>
        
        <div className="app__footer-links_icons flex items-center justify-center ">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 06:00 pm</p>
        <p className="p__opensans">Saturday:</p>
        <p className="p__opensans">09:00 am - 05:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 InnovateEd. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
