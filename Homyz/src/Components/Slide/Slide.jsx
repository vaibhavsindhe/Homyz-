import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import "./Slide.css"


export default function App() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className='photo-slide'><img src="/value.png" alt="" className='slide-image' /></SwiperSlide>
        <SwiperSlide className='photo-slide'>Slide 2</SwiperSlide>
        <SwiperSlide className='photo-slide'>Slide 3</SwiperSlide>
        <SwiperSlide className='photo-slide'>Slide 4</SwiperSlide>
        <SwiperSlide className='photo-slide'>Slide 5</SwiperSlide>
        <SwiperSlide className='photo-slide'>Slide 6</SwiperSlide>
        <SwiperSlide className='photo-slide'>Slide 7</SwiperSlide>
        <SwiperSlide className='photo-slide'>Slide 8</SwiperSlide>
        <SwiperSlide className='photo-slide'>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}