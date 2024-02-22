import { useState } from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './NewsLetter.css';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import { TbFidgetSpinner } from 'react-icons/tb';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false); // State to manage loading state
  const axiosPublic = useAxiosPublic();

  const handleSubscribe = async () => {
    setLoading(true); // Set loading state to true when subscribe button is clicked
    try {
      const response = await axiosPublic.post('/subscribe', { email });
      toast.success(response.data.message);
      setEmail(''); // Clear the input field after successful subscription
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false); // Reset loading state regardless of success or failure
    }
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button" className="btn-style" onClick={handleSubscribe} disabled={loading}>
        {loading ? (
            <TbFidgetSpinner className="animate-spin  m-auto" />
          ) : (
            "Subscribe"
          )}
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
