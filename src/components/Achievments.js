import React, { useEffect } from 'react';
import { AchieveStyle } from '../../StyledComponents/Styled';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Achievments = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <AchieveStyle data-aos='fade-left'>
        <h2 className='h2'>ACHIEVEVMENTS</h2>
        <div className='achieve'>
          <div>
            <h1>Scholarships & Bursaries</h1>
            <h1>2</h1>
          </div>
          <div>
            <h1>Awards</h1>
            <h1>4</h1>
          </div>
          <div>
            <h1>Publications</h1>
            <h1>25</h1>
          </div>
        </div>
      </AchieveStyle>
    </div>
  );
};

export default Achievments;
