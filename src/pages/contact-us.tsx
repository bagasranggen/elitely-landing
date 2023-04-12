import React from 'react';

import {HEADER} from "@/data/mock/contact-us";
import {CATEGORY} from "@/data/mock/forms";

import {Col, Container, Row} from "react-bootstrap";
import HeaderBanner from "@/components/common/banner/headerBanner/HeaderBanner";
import HeadingOffset from "@/components/common/heading/headingOffset/HeadingOffset";
import Button from "@/components/common/button/Button";
import Input from "@/components/common/input/Input";

export type ContactUsProps = {};

const ContactUs = ({}: ContactUsProps): React.ReactElement => (
    <>
        <HeaderBanner
            className='header-banner--faqs'
            breadcrumb={HEADER.breadcrumb}>
        </HeaderBanner>

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
                    <form
                        className='form-contact--regular'
                        action=""
                        data-animation='fade-in'
                        data-animation-direction='up'
                        data-animation-delay='.25'>
                        <Input
                            className='mb-3'
                            option={{variant: 'regular'}}
                            input={{type: 'text', id: 'name', placeholder: 'Name'}} />
                        <Input
                            className='mb-3'
                            option={{variant: 'regular'}}
                            input={{type: 'tel', id: 'name', placeholder: 'Phone Number'}} />
                        <Input
                            className='mb-3'
                            input={{type: 'select', id: 'category', placeholder: 'Category', options: CATEGORY}} />
                        <Input
                            className='mb-3'
                            option={{variant: 'regular', isMultiline: true}}
                            input={{type: 'text', id: 'name', placeholder: 'Message'}} />

                        <Row className='mt-5 justify-content-center'>
                            <Col md={5}>
                                <Button
                                    className='w-100'
                                    option={{variant: 'block', color: 'primary', size: 'lg'}}
                                    button={{type: "submit", label: 'Send'}} />
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </>
);

export default ContactUs;