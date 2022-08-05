import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Controller } from 'swiper';
import { Book, Star } from 'phosphor-react';

export const Stacks = () => {
  return (
    <Swiper
      slidesPerView={4}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      modules={[Autoplay, Controller]}
      className="w-[750px] bg-red-200 flex"
    >
      <SwiperSlide>
        <Star size={50} />
      </SwiperSlide>
      <SwiperSlide>
        <Book size={50} />
      </SwiperSlide>
      <SwiperSlide>
        <Star size={50} />
      </SwiperSlide>
      <SwiperSlide>
        <Book size={50} />
      </SwiperSlide>
    </Swiper>
  );
}