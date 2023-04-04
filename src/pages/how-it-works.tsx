import React from 'react';

import {CAROUSEL} from "@/data/mock/homepage";
import {CARDS, CHARTS, HOW_IT_WORKS} from "@/data/mock/how-it-works";

import {Col, Container, Row} from "react-bootstrap";
import CarouselBanner from "@/components/common/carousel/carouselBanner/CarouselBanner";
import CarouselCardList from "@/components/common/carousel/carouselCardList/CarouselCardList";
import CarouselCardImage from "@/components/common/carousel/carouselCardImage/CarouselCardImage";
import HeadingOffset from "@/components/common/heading/headingOffset/HeadingOffset";
import BarChart from "@/components/common/chart/barChart/BarChart";

export type HowItWorksProps = {};

const HowItWorks = ({}: HowItWorksProps): React.ReactElement => (
    <>
        <CarouselBanner items={CAROUSEL} />

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