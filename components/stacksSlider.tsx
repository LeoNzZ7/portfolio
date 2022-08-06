import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export function Stacks() {
  return (
    <>
      <Swiper 
        navigation={true} 
        loop={true}
        slidesPerView={4}
        modules={[Navigation]}
        className="w-[1000px] mt-10"
        >
          <SwiperSlide className="flex justify-center">
            <img className="w-auto h-[100px]" src="./images/html.png" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img className="w-auto h-[100px]" src="./images/css.png" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img className="w-auto h-[100px]" src="./images/javascript.png" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img className="w-auto h-[100px] p-1" src="./images/typescript.png" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img className="w-auto h-[100px]" src="./images/react.png" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img className="w-auto h-[100px]" src="./images/next.png" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <img className="w-auto h-[80px]" src="./images/node.png" />
          </SwiperSlide>
      </Swiper>
    </>
  );
}
