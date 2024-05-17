import React from 'react'
import Navbar from '../components/Navbar';
import Section_1 from '../components/Section_1';
import SwiperCarousel from '../components/SwiperCarousel';
import Section_2 from '../components/Section_2';
import Footer from '../components/Footer';
const HomePage = () => {
  return (
    <>
    <Navbar/>
    <Section_1/>
    <SwiperCarousel/>
    <Section_2/>
    <Footer/>
    </>
  )
}

export default HomePage;