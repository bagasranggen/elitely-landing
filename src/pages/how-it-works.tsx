import React from 'react';

import {CARDS, CHARTS, HEADER, HOW_IT_WORKS} from "@/data/mock/how-it-works";

import {Col, Container, Row} from "react-bootstrap";
import CarouselCardList from "@/components/common/carousel/carouselCardList/CarouselCardList";
import CarouselCardImage from "@/components/common/carousel/carouselCardImage/CarouselCardImage";
import HeadingOffset from "@/components/common/heading/headingOffset/HeadingOffset";
import BarChart from "@/components/common/chart/barChart/BarChart";
import HeaderBanner from "@/components/common/banner/headerBanner/HeaderBanner";
import ListBullet from "@/components/common/list/listBullet/ListBullet";

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
                            }]
                        }}>How it works</HeadingOffset>
                    <p>Learn more about how work is structured in our company</p>
                    <ListBullet
                        className='mt-5'
                        items={HEADER.list} />
                </Col>
            </Row>
        </HeaderBanner>

        <Container
            as='section'
            className='section-cards-list'>
            <CarouselCardList items={CARDS} />
        </Container>

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