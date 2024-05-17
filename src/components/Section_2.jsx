import * as React from 'react';
import '../Section_2.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


export default function Section_2() {
  return (
    <div className='swiper-carousel2-container bg-black'>
        <h1 className="heading-2">VIDEO</h1>
        <Swiper
    pagination={{
      type: 'progressbar',
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="swiper-carousel2"
  >
     <SwiperSlide>
          <div className="iframe-container">
            <iframe
              src="https://www.youtube.com/embed/n6b2il1O55U?si=sSSW_qdocBXmdXgH"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="iframe-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/tcrTQUVkUe0?si=OJemWN6rv-z_bOIb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="iframe-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-xgc6A37F-Y?si=pb_QonHGbYNDRAug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="iframe-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/wLYIHa_34xw?si=XBfQJ9BhDt4q-ol3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="iframe-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/uqg9VQ0OYrk?si=5FcECxDJNCO7iQt2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="iframe-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/99NyTTA-q-4?si=aSdUcnlilEVRD5PS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="iframe-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/GRwJ1X0pKN8?si=iKKwUruRmi6rLJyE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="iframe-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/LDyHhNAAqQA?si=PwzXnB0qOuxADHdV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </SwiperSlide>
  </Swiper>
    </div>
  );
}
