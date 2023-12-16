import React from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Gallery.css';

// import required modules
import {EffectCoverflow, Pagination} from 'swiper/modules';

function Gallery() {
    return (
        <>
            <h1 className="text-center mt-5">Gallery</h1>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className="custom-slide">
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="nature 2"/>
                </SwiperSlide>

                <SwiperSlide className="custom-slide">
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="nature 2"/>
                </SwiperSlide>

                <SwiperSlide className="custom-slide">
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="nature 2"/>
                </SwiperSlide>

                <SwiperSlide className="custom-slide">
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="nature 2"/>
                </SwiperSlide>

                <SwiperSlide className="custom-slide">
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="nature 2"/>
                </SwiperSlide>

                <SwiperSlide className="custom-slide">
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="nature 2"/>
                </SwiperSlide>

                <SwiperSlide className="custom-slide">
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="nature 2"/>
                </SwiperSlide>

                <SwiperSlide className="custom-slide">
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="nature 2"/>
                </SwiperSlide>

                <SwiperSlide className="custom-slide">
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="nature 2"/>
                </SwiperSlide>
            </Swiper>
        </>
    );

}

export default Gallery;