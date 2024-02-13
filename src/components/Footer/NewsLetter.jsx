
import SubHeading from '../SubHeading/SubHeading';
import './NewsLetter.css';

const NewsLetter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="btn-style">Subscribe</button>
    </div>
  </div>
);

export default NewsLetter;