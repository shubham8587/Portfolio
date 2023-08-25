import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg from '../components/HeroImg';
import ProWork from '../components/ProWork';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="PROJECTS" text="Some of my most recent Project" />
      <ProWork />
      <Footer/>
    </div>
  )
}

export default Projects;