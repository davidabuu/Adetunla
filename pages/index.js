import React from 'react';
import AboutMe from '../src/components/AboutMe';
import Achievments from '../src/components/Achievments';
import Footer from '../src/components/Footer';
import Intro from '../src/components/Intro';
import NavBar from '../src/components/NavBar';
import UserWebLayout from '../src/components/UserWebLayout';
import { FooterStyle, IntroStyle } from '../StyledComponents/Styled';

const HomePage = () => {
  return (
    <UserWebLayout webtitle={'Home Page'}>
      <NavBar />
      <Intro />
      <AboutMe />
      <Footer />
    </UserWebLayout>
  );
};

export default HomePage;
