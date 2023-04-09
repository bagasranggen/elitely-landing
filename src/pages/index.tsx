import React from 'react';
import Image from "next/image";

import {ALTERNATE, CARDS, CAROUSEL, HIGHLIGHT} from "@/data/mock/homepage";

import {Col, Container, Row} from "react-bootstrap";
import HeadingOffset from "@/components/common/heading/headingOffset/HeadingOffset";
import Button, {ButtonContainer} from "@/components/common/button/Button";
import CarouselCard from "@/components/common/carousel/carouselCard/CarouselCard";
import CardsAlternate from "@/components/common/cards/cardsAlternate/CardsAlternate";
import CarouselBanner from "@/components/common/carousel/carouselBanner/CarouselBanner";
import Input from "@/components/common/input/Input";

export type IndexProps = {};

const Index = ({}: IndexProps): React.ReactElement => {
    return <>
        <CarouselBanner items={CAROUSEL} />

        <Container
            as='section'
            className='section-cards'>
            <HeadingOffset className='mb-5 text-center'>Meeting <span className="fc--tertiary">new people</span>,
                having <span className='fc--secondary'>new experiences</span>, connecting
                with each other — that’s what <span className="fc--primary">dating</span> should be
                about!</HeadingOffset>

            <CarouselCard items={CARDS} />
        </Container>

        <section className="section-highlight">
            <Container>
                <Row className='gy-5 justify-content-between'>
                    {HIGHLIGHT.map((item: any) => (
                        <Col
                            className='text-center'
                            key={item.title}
                            md={2}>
                            <Image {...item.image} alt={item.title} />
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>

        <Container
            as='section'
            className='section-alternate'>
            <CardsAlternate items={ALTERNATE} />
        </Container>

        <section className="section-contact">
            <Container>
                <Row className='justify-content-center'>
                    <Col
                        md={8}
                        xl={6}>
                        <form
                            action=""
                            className='form-contact form-contact--simplified'>
                            <h2>Send us Message</h2>
                            <Input
                                className='mb-3'
                                option={{variant: 'regular'}}
                                input={{type: 'text', id: 'name', placeholder: 'Name'}} />
                            <Input
                                className='mb-3'
                                option={{variant: 'regular'}}
                                input={{type: 'email', id: 'name', placeholder: 'Email'}} />
                            <Input
                                className='mb-3'
                                option={{variant: 'regular'}}
                                input={{type: 'tel', id: 'name', placeholder: 'Mobile Number'}} />
                            <Input
                                className='mb-3'
                                option={{variant: 'regular', isMultiline: true}}
                                input={{type: 'text', id: 'name', placeholder: 'Message'}} />
                            <ButtonContainer className="text-center">
                                <Button
                                    option={{variant: 'block', color: 'primary', size: 'lg'}}
                                    button={{type: 'submit', label: 'Send'}} />
                            </ButtonContainer>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
}

export default Index;