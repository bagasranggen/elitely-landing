import React from 'react';

import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperOptions, Pagination} from "swiper";

import Card, {CardListProps, CardProps} from "@/components/common/cards/card/Card";
import Picture from "@/components/common/picture/Picture";
import {FadeIn} from "@/components/animation";

import 'swiper/css';
import "swiper/css/pagination";

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
    list: CardListProps["list"];
} & Pick<CardProps, "color">;

export type CarouselCardListProps = {
    className?: string;
    items: CarouselCardListItemProps[]
};

const CarouselCardList = ({className, items}: CarouselCardListProps): React.ReactElement => (
    <Swiper className={`cards--block-list${className ? ` ${className}` : ''}`} {...SwiperOptions}>
        {items.map((item: CarouselCardListItemProps, i: number) => (
            <SwiperSlide key={item.title}>
                <FadeIn options={{type: "fade-in", direction: i % 2 === 0 ? 'left' : 'right'}}>
                    <h2>
                        <Picture images={[{src: '/images/star.svg', width: 36, height: 34, alt: ''}]} />
                        {item.title}
                    </h2>
                    <Card
                        color={item.color}
                        list={item.list} />
                </FadeIn>
            </SwiperSlide>
        ))}
    </Swiper>
);

export default CarouselCardList;