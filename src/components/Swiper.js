import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import 'swiper/modules/effect-fade'
import "swiper/css";
import "swiper/css/effect-fade";
 import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

export default function SwiperGallery() {
  return (
    <>
      <Swiper
        effect={"fade"}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
         modules={[EffectFade,Pagination]}
        className="mySwiper"
      >
       <div>
       <SwiperSlide>
          <img src="/img4.jpg" className='swip' />
        </SwiperSlide>
       </div>
      <div>
      <SwiperSlide>
        <img src="/img3.jpg"  className='swip' />
        </SwiperSlide>
      </div>
       <div>
       <SwiperSlide>
        <img src="/img6.jpg"  className='swip' />
        </SwiperSlide>
       </div>
       <div>
       <SwiperSlide>
        <img src="/img5.jpg"  className='swip' />
        </SwiperSlide>s
       </div>
      </Swiper>
    </>
  );
}
