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
        <SwiperSlide className='photo-slide'><img src="/r1.png" alt="image" className='slide-image' /></SwiperSlide>
        <SwiperSlide className='photo-slide'><img src="/r3.png" alt="image" className='slide-image' /></SwiperSlide>
        <SwiperSlide className='photo-slide'><img src="/r5.png" alt="image" className='slide-image' /></SwiperSlide>
        <SwiperSlide className='photo-slide'><img src="/r6.png" alt="image" className='slide-image' /></SwiperSlide>
        <SwiperSlide className='photo-slide'><img src="/Contact.png" alt="image" className='slide-image' /></SwiperSlide>
        <SwiperSlide className='photo-slide'><img src="/value.png" alt="image" className='slide-image' /></SwiperSlide>
        <SwiperSlide className='photo-slide'><img src="/img9.png" alt="image" className='slide-image' /></SwiperSlide>
        <SwiperSlide className='photo-slide'><img src="/r4.png" alt="image" className='slide-image' /></SwiperSlide>
        <SwiperSlide className='photo-slide'><img src="/r2.png" alt="image" className='slide-image' /></SwiperSlide>
      </Swiper>
    </>
  );
}