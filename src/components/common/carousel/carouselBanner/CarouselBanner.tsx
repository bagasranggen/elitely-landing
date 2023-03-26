import React from 'react';

import {MAIN_COLOR} from "@/data/global";

import parse from "html-react-parser";
import 'swiper/css';
import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperOptions, Autoplay} from "swiper";

import {Col, Container, Row} from "react-bootstrap";
import Button, {ButtonContainer} from "@/components/common/button/Button";
import LogoHeartLine from "@/components/common/logo/logoHeartLine/LogoHeartLine";

const CarouselSettings: SwiperOptions = {
    modules: [Autoplay],
    slidesPerView: 1,
    slidesPerGroup: 1,
    autoplay: {
        delay: 5000,
    }
}

export type CarouselBannerProps = {
    className?: string;
    items: Array<any>;
};

const CarouselBanner = ({className, items}: CarouselBannerProps): React.ReactElement => (
    <Swiper className='carousel--banner' {...CarouselSettings}>
        {items.map((item: any) => (
            <SwiperSlide key={item.title}>
                <Container className={`carousel__banner carousel__banner--${item.variant}`}>
                    <Row className=''>
                        <Col className={`offset-lg-4 carousel__title${item.color ? ` carousel__title--${item.color}` : ''}`}>
                            <h2>{item.title}<br />
                                <LogoHeartLine color={MAIN_COLOR[item.color]} /><span>{item.titleBlock}</span>
                            </h2>
                        </Col>
                        <Col
                            className='offset-md-7 offset-lg-8 carousel__description'
                            md={4}>
                            {parse(item.description)}
                            <ButtonContainer className='mt-4'>
                                <Button
                                    option={{variant: 'block', color: 'light', size: 'lg', hasArrow: true}}
                                    link={{href: '#', label: 'How It Works'}} />
                            </ButtonContainer>
                        </Col>
                    </Row>
                </Container>
            </SwiperSlide>
        ))}
    </Swiper>
);

export default CarouselBanner;