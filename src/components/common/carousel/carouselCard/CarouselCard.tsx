import React from 'react';

import {createAnimation} from "@/components/animation/helper";

import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperOptions, Pagination} from "swiper";

import LogoHeart from "@/components/common/logo/logoHeart/LogoHeart";

import 'swiper/css';
import "swiper/css/pagination";

const SwiperOptions: SwiperOptions = {
    modules: [Pagination],
    pagination: {
        clickable: true,
    },
    spaceBetween: 20,
    breakpoints: {
        0: {
            pagination: {enabled: true},
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        992: {
            pagination: {enabled: false},
            slidesPerView: 3,
            slidesPerGroup: 3,
        }
    }
}

type CarouselCardItemProps = {
    // color: MainColorProps;
    color: any;
    title: string;
    description: string;
}

export type CarouselCardProps = {
    className?: string;
    items: Array<CarouselCardItemProps>
};

const CarouselCard = ({className, items}: CarouselCardProps): React.ReactElement => (
    <Swiper className={`carousel--cards${className ? ` ${className}` : ''}`} {...SwiperOptions}>
        {items.map((item: CarouselCardItemProps, i: number) => (
            <SwiperSlide
                key={item.title}
                //{...createAnimation({type: "fade-in", direction: "up", delay: i * .15})}
            >
                <div
                    className={`carousel__card carousel__card--${item.color}`}
                    {...createAnimation({type: "fade-in", direction: "up", delay: i * .15})}>
                    <LogoHeart color={item.color} />
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
);

export default CarouselCard;