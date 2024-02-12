import   { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { useTypewriter } from 'react-simple-typewriter';  
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../../assets/home/01.jpg';
import img2 from '../../assets/home/02.jpg';
import img3 from '../../assets/home/03.jpg';
import img4 from '../../assets/home/04.jpg';

const Banner = () => {
  const slides = [
    {
      image: img1,
      title: 'Learn Anytime, Anywhere',
      subtitle: 'Unlock your potential with our flexible online courses.',
      button: 'Explore',
      link: '/all-courses', // Define the link for the button
    },
    {
      image: img2,
      title: 'Expert Instructors',
      subtitle: 'Learn from industry experts with real-world experience.',
    },
    {
      image: img3,
      title: 'Interactive Learning',
      subtitle: 'Engage with interactive lessons and quizzes.',
    },
    {
      image: img4,
      title: 'Join a Global Community',
      subtitle: 'Connect with learners from around the world.',
      button: 'Join Us',
      link: '/join-teacher', // Define the link for the button
    },
  ];

  const [typewriterText, setTypewriterText] = useState('');  

  // useTypewriter hook to get the typewriter effect
  const [typeEffect] = useTypewriter({
    words: [' Anytime', 'Anywhere', 'with Us!'],
    loop: true,
    deleteSpeed: 50,
    typeSpeed: 100,
  });

  useEffect(() => {
    setTypewriterText(typeEffect); // Update typewriter text state
  }, [typeEffect]); // Update when typeEffect changes

  return (
    <Carousel>
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.image} alt={`Slide ${index + 1}`} />
          <div className="carousel-content">
            {/* Conditionally render typewriter text for the first slide's title */}
            {index === 0 && (
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 text-white">
                <h3 className="text-3xl font-bold headtext__cormorant">
                  Learn 
                  <span> {typewriterText}</span>
                  </h3>
                <p className="text-lg p__cormorant">{slide.subtitle}</p>
                {slide.link && (
                  <Link to={slide.link}>
                    <button className="btn-style mt-5 hover:text-black hover:bg-first">{slide.button}</button>
                  </Link>
                )}
              </div>
            )}
            {/* For other slides, render the title directly */}
            {index !== 0 && (
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 text-white">
                <h3 className="text-3xl font-bold headtext__cormorant">{slide.title}</h3>
                <p className="text-lg p__cormorant">{slide.subtitle}</p>
                {slide.link && (
                  <Link to={slide.link}>
                    <button className="btn-style mt-5 hover:text-black hover:bg-first">{slide.button}</button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
