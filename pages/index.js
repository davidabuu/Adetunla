import React from 'react';
import AboutMe from '../src/components/AboutMe';
import Achievments from '../src/components/Achievments';
import Intro from '../src/components/Intro';
import NavBar from '../src/components/NavBar';
import { FooterStyle, IntroStyle } from '../StyledComponents/Styled';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Intro />
      <AboutMe />
      <Achievments />
      <FooterStyle />
    </div>
  );
};

export default HomePage;
