import React from 'react';

import {HEADER} from "@/data/mock/contact-us";

import {Col, Container, Row} from "react-bootstrap";
import HeaderBanner from "@/components/common/banner/headerBanner/HeaderBanner";
import HeadingOffset from "@/components/common/heading/headingOffset/HeadingOffset";
import LogoHeartLineDiagonal from "@/components/common/logo/logoHeartLineDiagonal/LogoHeartLineDiagonal";
import ContactUsForm from "@/components/layout/forms/contactUsForm/ContactUsForm";

export type ContactUsProps = {};

const ContactUs = ({}: ContactUsProps): React.ReactElement => (
    <>
        <HeaderBanner
            className='header-banner--faqs'
            breadcrumb={HEADER.breadcrumb}>
        </HeaderBanner>

        <LogoHeartLineDiagonal
            className='decorative--bent-right'
            color='secondary'
            options={{variant: 'bent-right', animation: {type: 'fade-in', direction: 'right'}}} />
        <LogoHeartLineDiagonal
            className='decorative--bent-left'
            color='tertiary'
            options={{variant: 'bent-left', animation: {type: 'fade-in', direction: 'left'}}} />
        <LogoHeartLineDiagonal
            className='decorative--angled'
            color='tertiary'
            options={{variant: 'angled', animation: {type: 'fade-in', direction: 'left'}}} />

        <Container className='container-form--contact-regular'>
            <HeadingOffset
                className='mt-5 mb-5 text-center'
                option={{
                    level: "h1",
                    variant: "offset",
                    subHeading: 'Got a question? We’d love to hear from you. Send us a message and we’ll respond as soon as possible',
                    animation: {position: "top"}
                }}>Contact Us</HeadingOffset>

            <Row className='justify-content-center'>
                <Col lg={7}>
                    <ContactUsForm className='form-contact--regular' />
                </Col>
            </Row>
        </Container>
    </>
);

export default ContactUs;