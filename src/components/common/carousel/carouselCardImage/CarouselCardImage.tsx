import React from 'react';

import {Card} from "react-bootstrap";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";


import 'swiper/css';
import "swiper/css/pagination";
import {ImageProps, MainColorProps} from "@/@type/common";
import ListDashed, {ListDashedItem, ListDashedProps} from "@/components/common/list/listDashed/ListDashed";

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

export type CarouselCardImageItemProps = {
    image: ImageProps;
    title: string;
    color: MainColorProps;
    list: ListDashedProps["items"];
}

export type CarouselCardImageProps = {
    className?: string;
    items: CarouselCardImageItemProps[];
};

const CarouselCardImage = ({className, items}: CarouselCardImageProps): React.ReactElement => (
    <Swiper className={`cards--image${className ? ` ${className}` : ''}`} {...SwiperOptions}>
        {items.map((item: any) => (
            <SwiperSlide key={item.title}>
                <Card className={`cards__card cards__card--${item.color}`}>
                    <Card.Img
                        variant="top"
                        src={item.image.src} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <ListDashed items={item.list} />
                    </Card.Body>
                </Card>
            </SwiperSlide>
        ))}
    </Swiper>
);

export default CarouselCardImage;