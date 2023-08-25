import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg from '../components/HeroImg';
import AboutContent  from '../components/AboutContent';

const About = () => {
  return (
    <div>
    <Navbar />
    <HeroImg heading="About me." text="Some of my most recent Project" />
    <AboutContent />
    <Footer />
    </div>
  )
}

export default About