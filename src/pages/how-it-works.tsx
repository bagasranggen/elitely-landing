import React from 'react';

import {CARDS, CHARTS, HEADER, HOW_IT_WORKS} from "@/data/mock/how-it-works";

import {createAnimation} from "@/components/animation/helper";

import {Col, Container, Row} from "react-bootstrap";
import CarouselCardList from "@/components/common/carousel/carouselCardList/CarouselCardList";
import CarouselCardImage from "@/components/common/carousel/carouselCardImage/CarouselCardImage";
import HeadingOffset from "@/components/common/heading/headingOffset/HeadingOffset";
import BarChart from "@/components/common/chart/barChart/BarChart";
import HeaderBanner from "@/components/common/banner/headerBanner/HeaderBanner";
import ListBullet from "@/components/common/list/listBullet/ListBullet";
import Picture from "@/components/common/picture/Picture";
import LogoCircle from "@/components/common/logo/logoCircle/LogoCircle";

export type HowItWorksProps = {};

const HowItWorks = ({}: HowItWorksProps): React.ReactElement => (
    <>
        <HeaderBanner
            className='header-banner--how'
            color='tertiary'
            breadcrumb={HEADER.breadcrumb}>
            <Row>
                <Col
                    md={6}
                    className='text-center text-md-start'>
                    <HeadingOffset
                        className='mb-4 text-center text-md-start'
                        option={{
                            level: "h1",
                            variant: "regular",
                            hasLine: [{
                                src: '/images/heading-line-how.svg',
                                width: 321,
                                height: 7,
                                alt: 'general line'
                            }],
                            animation: {position: "top"}
                        }}>How it works</HeadingOffset>
                    <p {...createAnimation({type: "fade-in", direction: "up"})}>Learn more about how work is structured
                        in our company</p>
                    <ListBullet
                        className='mt-5'
                        options={{color: "tertiary", animation: {type: 'fade-in', direction: 'up', position: 'top'}}}
                        items={HEADER.list} />
                </Col>
                <Col
                    md={6}
                    className='align-self-end'>
                    <div className="header-banner__image">
                        <Picture
                            className='image__main'
                            images={HEADER.media.main} />
                        <Picture
                            className='image__bg'
                            images={HEADER.media.bg} />
                    </div>
                </Col>
            </Row>
        </HeaderBanner>

        <section className="section-cards-list">
            <Container>
                <LogoCircle options={{animation: {type: 'fade-in', direction: 'right'}}} />
                <CarouselCardList items={CARDS} />
            </Container>
        </section>

        <section className='section-charts'>
            <Container>
                <HeadingOffset
                    className='mb-5 text-center'
                    option={{size: 'lg'}}>How payment processing works on Elitely</HeadingOffset>

                <Row className='justify-content-center'>
                    <Col md={11}>
                        <BarChart data={CHARTS} />
                    </Col>
                </Row>
            </Container>
        </section>

        <Container
            as='section'
            className='section-cards-image'>
            <HeadingOffset className='mb-5 text-center'>How it works</HeadingOffset>
            <CarouselCardImage items={HOW_IT_WORKS} />
        </Container>
    </>
);

export default HowItWorks;