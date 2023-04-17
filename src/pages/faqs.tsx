import React from 'react';

import {FAQS, HEADER} from "@/data/mock/faqs";

import {Col, Container, Row} from "react-bootstrap";
import Accordion from "@/components/common/accordion/Accordion";
import HeadingOffset from "@/components/common/heading/headingOffset/HeadingOffset";
import HeaderBanner from "@/components/common/banner/headerBanner/HeaderBanner";
import ListBullet from "@/components/common/list/listBullet/ListBullet";
import Picture from "@/components/common/picture/Picture";
import LogoHeartLineDiagonal from "@/components/common/logo/logoHeartLineDiagonal/LogoHeartLineDiagonal";
import HeaderHead from "@/components/layout/header/headerHead/HeaderHead";

export type FaqsProps = {};

const Faqs = ({}: FaqsProps): React.ReactElement => (
    <>
        <HeaderHead title="FAQ's" />
        <HeaderBanner
            className='header-banner--faqs'
            color='tertiary'
            breadcrumb={HEADER.breadcrumb}>

            <LogoHeartLineDiagonal
                className='decorative--bent-left'
                color='tertiary'
                options={{variant: 'bent-left', animation: {type: 'fade-in', direction: 'left'}}} />

            <Row>
                <Col
                    md={7}
                    xl={8}>
                    <HeadingOffset
                        className='mb-4 text-center text-md-start'
                        option={{level: "h1", variant: "regular", animation: {position: "top"}}}>Frequently Asked
                        Questions</HeadingOffset>
                    <ListBullet
                        className='mt-5 text-center text-md-start'
                        options={{color: "tertiary", animation: {type: 'fade-in', direction: 'up', position: "top"}}}
                        items={HEADER.list} />
                </Col>
                <Col
                    md={5}
                    xl={4}
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

        {Object.keys(FAQS).map((key: string) => (
            <Container
                key={key}
                className='section-faqs'>
                <HeadingOffset
                    option={{variant: "regular", hasLine: FAQS[key]?.image}}
                    className='mb-4 text-center text-md-start'>{FAQS[key].title}</HeadingOffset>
                <Accordion
                    color={FAQS[key].color}
                    items={FAQS[key].items} />
            </Container>
        ))}
    </>
);

export default Faqs;