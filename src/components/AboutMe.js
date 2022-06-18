import React, { useEffect } from 'react';
import { AboutMeStyle } from '../../StyledComponents/Styled';
import Aos from 'aos';
import 'aos/dist/aos.css';
const AboutMe = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <AboutMeStyle data-aos='fade-right'>
        <img src='./img2.jpg' />
        <div className='about'>
          <h1>ABOUT ME</h1>
          <p>
            Engr. (Dr.) Adedotun Adetunla holds a Ph.D. in Mechanical
            Engineering Science from the University of Johannesburg, South
            Africa in 2019. He is currently a Senior Research Associate at the
            University of Johannesburg, South Africa and Senior Lecturer at Afe
            Babalola University, Ekiti, Nigeria.
          </p>
          <p>
            {' '}
            Adedotun is mostly interested in Automation, Robotics, Additive
            Manufacturing, Finite Element Analysis, Materials Science, and Cloud
            Manufacturing.
          </p>
          <button>Learn More</button>
        </div>
      </AboutMeStyle>
    </div>
  );
};

export default AboutMe;
