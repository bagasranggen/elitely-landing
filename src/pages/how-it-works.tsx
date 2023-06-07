import React from 'react';

import { CARDS, CHARTS, HEADER, HOW_IT_WORKS, PAYMENT } from "@/data/mock/how-it-works";

import parse from "html-react-parser";
import { createAnimation } from "@/components/animation/helper";

import { Col, Container, Row } from "react-bootstrap";
import CarouselCardList from "@/components/common/carousel/carouselCardList/CarouselCardList";
import CarouselCardImage from "@/components/common/carousel/carouselCardImage/CarouselCardImage";
import HeadingOffset from "@/components/common/heading/headingOffset/HeadingOffset";
import BarChart from "@/components/common/chart/barChart/BarChart";
import HeaderBanner from "@/components/common/banner/headerBanner/HeaderBanner";
import ListBullet from "@/components/common/list/listBullet/ListBullet";
import Picture from "@/components/common/picture/Picture";
import LogoCircle from "@/components/common/logo/logoCircle/LogoCircle";
import LogoHeartLineDiagonal from "@/components/common/logo/logoHeartLineDiagonal/LogoHeartLineDiagonal";
import HeaderHead from "@/components/layout/header/headerHead/HeaderHead";

export type HowItWorksProps = {};

const HowItWorks = ({}: HowItWorksProps): React.ReactElement => (
    <>
        <HeaderHead title="How It Works" />

        <HeaderBanner
            className="header-banner--how"
            color="tertiary"
            breadcrumb={HEADER.breadcrumb}>

            <LogoHeartLineDiagonal
                className="decorative--bent-left"
                color="tertiary"
                options={{ variant: 'bent-left', animation: { type: 'fade-in', direction: 'left' } }} />
            <LogoHeartLineDiagonal
                className="decorative--bent-right"
                color="secondary"
                options={{ variant: 'bent-right', animation: { type: 'fade-in', direction: 'right' } }} />

            <Row>
                <Col md={6}>
                    <HeadingOffset
                        className="mb-4 text-center text-md-start"
                        option={{
                            level: "h1",
                            variant: "regular",
                            hasLine: [ {
                                src: '/images/heading-line-how.svg',
                                width: 321,
                                height: 7,
                                alt: 'general line'
                            } ],
                            animation: { position: "top" }
                        }}>How it works</HeadingOffset>
                    {/*<p*/}
                    {/*    className='text-center text-md-start' {...createAnimation({*/}
                    {/*    type: "fade-in",*/}
                    {/*    direction: "up"*/}
                    {/*})}>Learn more about how work is structured*/}
                    {/*    in our company</p>*/}
                    <ListBullet
                        className="mt-5"
                        options={{
                            color: "tertiary",
                            animation: { type: 'fade-in', direction: 'up', position: 'top' }
                        }}
                        items={HEADER.list} />
                </Col>
                <Col
                    md={6}
                    className="align-self-end">
                    <div className="header-banner__image">
                        <Picture
                            className="image__main"
                            images={HEADER.media.main} />
                        <Picture
                            className="image__bg"
                            images={HEADER.media.bg} />
                    </div>
                </Col>
            </Row>
        </HeaderBanner>

        <section className="section-cards-list">
            <Container>
                <LogoCircle options={{ animation: { type: 'fade-in', direction: 'right' } }} />
                <CarouselCardList items={CARDS} />
            </Container>
        </section>

        <section className="section-payment">
            <Container>
                <HeadingOffset
                    className="mb-5 text-center"
                    option={{ size: 'lg' }}>How payment processing works on Elitely</HeadingOffset>

                <Row className="justify-content-center">
                    <Col xl={11}>
                        <Row
                            className="mb-5 gx-xl-5 flex-nowrap justify-content-between section-payment__cards"
                            {...createAnimation({
                                type: "fade-in",
                                direction: 'up'
                            })}>
                            {PAYMENT.map((pay: any, i: number) => (
                                <React.Fragment key={i}>
                                    <Col
                                        className="section-payment__columns"
                                        xs={10}
                                        md={3}>
                                        <div className="section-payment__card">
                                            <Picture
                                                images={pay.media}
                                                className="card__image" />
                                            <div className="card__description">
                                                {parse(pay.description)}
                                                {pay?.image && <Picture images={pay.image} />}
                                            </div>
                                        </div>
                                    </Col>
                                    {i !== PAYMENT.length - 1 && (
                                        <Col
                                            className="align-self-center"
                                            xs={3}
                                            md={2}
                                            lg={1}>
                                            <Picture
                                                images={[ {
                                                    src: '/images/how/payment-arrow.png',
                                                    width: 86,
                                                    height: 45,
                                                    alt: ''
                                                } ]} />
                                        </Col>
                                    )}
                                </React.Fragment>
                            ))}
                        </Row>
                        <Row
                            className="mb-5 gx-5 flex-nowrap justify-content-between section-payment__cards-detail" {...createAnimation({
                            type: "fade-in",
                            direction: 'up'
                        })}>
                            {PAYMENT.map((pay: any, i: number) => (
                                <Col
                                    key={i}
                                    className="section-payment__columns"
                                    xs={10}
                                    md={3}>
                                    <div className="section-payment__card-detail">
                                        {typeof pay?.detail?.title === 'string' && <HeadingOffset
                                            className="mb-4"
                                            option={{
                                                variant: 'regular',
                                                level: "h2",
                                                animation: { position: "top" }
                                            }}>{parse(pay.detail?.title)}</HeadingOffset>}

                                        {typeof pay?.detail?.title === 'object' &&
                                            <Picture
                                                className="mb-4"
                                                images={pay?.detail?.title}
                                                options={{
                                                    animation: {
                                                        type: "fade-in",
                                                        direction: 'up',
                                                        position: "top"
                                                    }
                                                }} />}

                                        <div className="card-detail__detail">{parse(pay?.detail?.subTitle ?? '')}</div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        {/*<BarChart data={CHARTS} />*/}
                    </Col>
                </Row>
            </Container>
        </section>

        <Container
            as="section"
            className="section-cards-image">
            <HeadingOffset className="mb-5 text-center">How it works</HeadingOffset>
            <CarouselCardImage items={HOW_IT_WORKS} />
        </Container>
    </>
);

export default HowItWorks;