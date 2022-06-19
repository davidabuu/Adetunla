import React, { useEffect } from 'react';
import { IntroStyle } from '../../StyledComponents/Styled';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Intro = () => {
  return (
    <IntroStyle>
      <h1>Hi, I am Dr Adedotun Adetunla</h1>
      <img src='./img.jpg' alt='Img' />
    </IntroStyle>
  );
};

export default Intro;
