import React from 'react';

import slide_image_1 from '../assets/album1.jpeg';
import slide_image_2 from '../assets/album2.jpeg';
import slide_image_3 from '../assets/album3.jpeg';
import slide_image_4 from '../assets/album4.jpeg';
import slide_image_5 from '../assets/album5.jpeg';
import slide_image_6 from '../assets/album6.jpeg';
import slide_image_7 from '../assets/album7.jpeg';
// import background_img from '../assets/swiper_backgroung_img.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import '../swiper-carousel.css';
const SwiperCarousel = () => {
    return (
        <div className="swiper-carousel1-container" 
        // style={{ backgroundImage: `url(${background_img})` }}
        style={{ backgroundColor: `black` }}
        >
        <h1 className="heading-1">NEW MUSIC</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          spaceBetween={-200}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper-carousel1"
        >
          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_5} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_6} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_7} alt="slide_image" />
          </SwiperSlide>
        </Swiper>
      </div>
    )
  };
  export default SwiperCarousel;
  