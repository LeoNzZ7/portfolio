import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export function Stacks() {
  return (
    <>
      <Swiper 
        navigation={true} 
        loop={true}
        slidesPerView={4}
        modules={[Navigation]}
        className="text-gray-100 w-[980px] mt-20"
        >
          <SwiperSlide className="flex justify-center" >HTML5</SwiperSlide>
          <SwiperSlide className="flex justify-center"  >CSS3</SwiperSlide>
          <SwiperSlide className="flex justify-center" >JAVASCRIPT</SwiperSlide>
          <SwiperSlide className="flex justify-center" >REACTJS</SwiperSlide>
          <SwiperSlide className="flex justify-center" >REACT NATIVE</SwiperSlide>
          <SwiperSlide className="flex justify-center" >NEXTJS</SwiperSlide>
          <SwiperSlide className="flex justify-center" >NODEJS</SwiperSlide>
          <SwiperSlide className="flex justify-center" >SQL</SwiperSlide>
      </Swiper>
    </>
  );
}
