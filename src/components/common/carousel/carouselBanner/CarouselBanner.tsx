import React from 'react';

import {MAIN_COLOR} from "@/data/global";

import parse from "html-react-parser";
import {createAnimation} from "@/components/animation/helper";
import 'swiper/css';
import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperOptions, Autoplay} from "swiper";

import {Col, Container, Row} from "react-bootstrap";
import Button, {ButtonContainer} from "@/components/common/button/Button";
import LogoHeartLine from "@/components/common/logo/logoHeartLine/LogoHeartLine";
import Picture from "@/components/common/picture/Picture";
import LogoHeartLineDiagonal from "@/components/common/logo/logoHeartLineDiagonal/LogoHeartLineDiagonal";
import LogoHeart from "@/components/common/logo/logoHeart/LogoHeart";

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
            <SwiperSlide key={item.title + item.titleBlock}>
                <div className={`carousel__banner carousel__banner--${item.variant}`}>

                    <LogoHeartLineDiagonal
                        className='decorative--bent-left'
                        color='tertiary'
                        options={{
                            variant: 'bent-left',
                            animation: {type: 'fade-in', direction: 'left', position: "top"}
                        }} />
                    <LogoHeartLineDiagonal
                        className='decorative--bent-right'
                        color='secondary'
                        options={{
                            variant: 'bent-right',
                            animation: {type: 'fade-in', direction: 'right', position: "top"}
                        }} />
                    <div
                        className="decorative decorative--doubled-heart"
                        {...createAnimation({type: "fade-in", position: "top"})}>
                        <div className="heart-doubled-wrapper">
                            <LogoHeart color='primary' />
                            <LogoHeart color='primary' />
                        </div>
                    </div>

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