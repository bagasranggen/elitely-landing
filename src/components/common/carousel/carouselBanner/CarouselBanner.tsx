import React from 'react';

import {MAIN_COLOR} from "@/data/global";

import parse from "html-react-parser";
import 'swiper/css';
import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperOptions, Autoplay} from "swiper";

import {Col, Container, Row} from "react-bootstrap";
import Button, {ButtonContainer} from "@/components/common/button/Button";
import LogoHeartLine from "@/components/common/logo/logoHeartLine/LogoHeartLine";
import Picture from "@/components/common/picture/Picture";

const CarouselSettings: SwiperOptions = {
    modules: [Autoplay],
    slidesPerView: 1,
    slidesPerGroup: 1,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
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
                <div className={`carousel__banner carousel__banner--${item.variant}`}>
                    <Container>
                        <Row>
                            <Col
                                className={`${item?.options?.columns?.first ? `${item?.options?.columns?.first} ` : ''}carousel__title${item.color ? ` carousel__title--${item.color}` : ''}`}
                                {...item?.options?.columnsSize?.first}>
                                <h2>{item.title}<br />
                                    <LogoHeartLine color={MAIN_COLOR[item.color as keyof Object]} /><span>{item.titleBlock}</span>
                                </h2>
                            </Col>
                            <Col
                                className={`${item?.options?.columns?.second ? `${item?.options?.columns?.second} ` : ''}carousel__description`}
                                {...item?.options?.columnsSize?.second}>
                                {parse(item.description)}
                                <ButtonContainer className='mt-4'>
                                    <Button
                                        option={{variant: 'block', color: 'light', size: 'lg', hasArrow: true}}
                                        link={{href: '/how-it-works', label: 'How It Works'}} />
                                </ButtonContainer>
                            </Col>
                            <Col xs={12}>
                                <div className="carousel__image text-center text-lg-start">
                                    <Picture
                                        className='image__main'
                                        images={item.media?.main} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
);

export default CarouselBanner;