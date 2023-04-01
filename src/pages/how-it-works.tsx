import React from 'react';

import {CAROUSEL} from "@/data/mock/homepage";
import {CARDS, HOW_IT_WORKS} from "@/data/mock/how-it-works";

import CarouselBanner from "@/components/common/carousel/carouselBanner/CarouselBanner";
import {Container} from "react-bootstrap";
import CarouselCardList from "@/components/common/carousel/carouselCardList/CarouselCardList";
import CarouselCardImage from "@/components/common/carousel/carouselCardImage/CarouselCardImage";
import HeadingOffset from "@/components/common/heading/headingOffset/HeadingOffset";

export type HowItWorksProps = {};

const HowItWorks = ({}: HowItWorksProps): React.ReactElement => (
    <>
        <CarouselBanner items={CAROUSEL} />

        <Container as='section'>
            <CarouselCardList items={CARDS} />
        </Container>

        <Container>
            <HeadingOffset className='mb-5 text-center'>How it works</HeadingOffset>
            <CarouselCardImage items={HOW_IT_WORKS} />
        </Container>
    </>
);

export default HowItWorks;