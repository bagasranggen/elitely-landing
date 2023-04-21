import React from 'react';
import Image from "next/image";

import {createAnimation} from "@/components/animation/helper";

import {ALTERNATE, CARDS, CAROUSEL, HIGHLIGHT} from "@/data/mock/homepage";

import {Col, Container, Row} from "react-bootstrap";
import HeadingOffset from "@/components/common/heading/headingOffset/HeadingOffset";
import CarouselCard from "@/components/common/carousel/carouselCard/CarouselCard";
import CardsAlternate from "@/components/common/cards/cardsAlternate/CardsAlternate";
import CarouselBanner from "@/components/common/carousel/carouselBanner/CarouselBanner";
import LogoHeartLineDiagonal from "@/components/common/logo/logoHeartLineDiagonal/LogoHeartLineDiagonal";
import LogoCircle from "@/components/common/logo/logoCircle/LogoCircle";
import ContactUsForm from "@/components/layout/forms/contactUsForm/ContactUsForm";
import HeaderHead from "@/components/layout/header/headerHead/HeaderHead";

export type AboutUsProps = {};

const AboutUs = ({}: AboutUsProps): React.ReactElement => <>
    <HeaderHead title='About Us' />

    <CarouselBanner items={CAROUSEL} />

    <section className='section-cards'>
        <Container>
            <LogoHeartLineDiagonal
                color='primary'
                options={{animation: {type: 'fade-in', direction: 'left'}}} />
            <LogoCircle options={{animation: {type: 'fade-in', direction: 'right'}}} />

            <HeadingOffset className='mb-5 text-center'>Meeting <span className="fc--tertiary">new people</span>,
                having <span className='fc--secondary'>new experiences</span>, connecting
                with each other — that’s what <span className="fc--primary">dating</span> should be
                about!</HeadingOffset>

            <CarouselCard items={CARDS} />
        </Container>
    </section>

    <section
        className="section-highlight"
        {...createAnimation({type: "fade-in", direction: "up"})}>
        <Container>
            <Row className='gy-5 justify-content-between'>
                {HIGHLIGHT.map((item: any) => (
                    <Col
                        className='text-center'
                        key={item.title + item.description}
                        md={2}>
                        <Image {...item.image} alt={item.title} />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>

    <section className='section-alternate'>
        <Container>
            <LogoHeartLineDiagonal
                color='secondary'
                options={{variant: 'right', animation: {type: 'fade-in', direction: 'right'}}} />
            <LogoHeartLineDiagonal
                className='decorative-second'
                color='tertiary'
                options={{variant: 'angled', animation: {type: 'fade-in', direction: 'left'}}} />
            <CardsAlternate items={ALTERNATE} />
        </Container>
    </section>

    <section
        className="section-contact"
        {...createAnimation({type: "fade-in", direction: "up"})}>
        <Container>
            <Row className='justify-content-center'>
                <Col
                    md={8}
                    xl={6}>
                    <ContactUsForm
                        className='form-contact form-contact--simplified'
                        heading='Send us a message' />
                </Col>
            </Row>
        </Container>
    </section>
</>


export default AboutUs;