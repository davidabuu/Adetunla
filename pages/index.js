import Head from 'next/head';
import React from 'react';
import AboutMe from '../src/components/AboutMe';
import Achievments from '../src/components/Achievments';
import Footer from '../src/components/Footer';
import Gallery from '../src/components/Gallery';
import Intro from '../src/components/Intro';
import NavBar from '../src/components/NavBar';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title> Home Page | Dotman</title>
      </Head>
      <NavBar />
      <Intro />
      <AboutMe />
      <Gallery />
      <Achievments />
      <Footer />
    </div>
  );
};

export default HomePage;
