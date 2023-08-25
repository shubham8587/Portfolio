import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg from '../components/HeroImg';
import Form  from '../components/Form';


const Contact = () => {
  return (
    <div>
    <Navbar />
    <HeroImg heading="Contact me." text="Some of my most recent Project" />
    <Form />
    <Footer />
    </div>
  )
}

export default Contact