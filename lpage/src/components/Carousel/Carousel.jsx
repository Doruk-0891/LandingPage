import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import "swiper/css";
import styles from './Carousel.module.css';
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import CarouselCard from "./CarouselCard/CarouselCard";


const Carousel = ({data}) => {
    return (
        <div className={styles.carouselWrapper}>
            <Swiper 
            style={{padding: '0px 20px'}}
            initialSlide={0}
            modules={[Navigation]}
            slidesPerView={"auto"}
            spaceBetween={40}
            allowTouchMove
            >
                <CarouselLeftNavigation />
                <CarouselRightNavigation />
                {
                    data['card_details'].map((slide) => {
                        return (<SwiperSlide key={slide.id} style={{width: 'auto'}}>
                            {
                                <CarouselCard data={slide} />
                            }
                            </SwiperSlide>)
                    })
                }
            </Swiper>
         </div>
    );
}

export default Carousel;