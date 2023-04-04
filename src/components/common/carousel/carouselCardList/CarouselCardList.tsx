import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperOptions, Pagination} from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import Card, {CardListProps, CardProps} from "@/components/common/cards/card/Card";
import Picture from "@/components/common/picture/Picture";

const SwiperOptions: SwiperOptions = {
    modules: [Pagination],
    pagination: {
        clickable: true,
    },
    spaceBetween: 40,
    breakpoints: {
        0: {
            pagination: {enabled: true},
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        768: {
            pagination: {enabled: false},
            slidesPerView: 2,
            slidesPerGroup: 2,
        }
    }
}

export type CarouselCardListItemProps = {
    title: string;
} & Pick<CardProps, "color"> & CardListProps;

export type CarouselCardListProps = {
    className?: string;
    items: CarouselCardListItemProps[]
};

const CarouselCardList = ({className, items}: CarouselCardListProps): React.ReactElement => (
    <Swiper className={`cards--block-list${className ? ` ${className}` : ''}`} {...SwiperOptions}>
        {items.map((item: CarouselCardListItemProps) => (
            <SwiperSlide key={item.title}>
                <h2>
                    <Picture images={[{src: '/images/star.svg', width: 36, height: 34, alt: ''}]} />
                    {item.title}
                </h2>
                <Card
                    color={item.color}
                    list={item.list} />
            </SwiperSlide>
        ))}
    </Swiper>
);

export default CarouselCardList;