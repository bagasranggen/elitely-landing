import React from 'react';

import {FAQS, HEADER} from "@/data/mock/faqs";

import {Container} from "react-bootstrap";
import Accordion from "@/components/common/accordion/Accordion";
import HeadingOffset from "@/components/common/heading/headingOffset/HeadingOffset";
import HeaderBanner from "@/components/common/banner/headerBanner/HeaderBanner";
import ListBullet from "@/components/common/list/listBullet/ListBullet";

export type FaqsProps = {};

const Faqs = ({}: FaqsProps): React.ReactElement => (
    <>
        <HeaderBanner
            className='header-banner--faqs'
            color='tertiary'
            breadcrumb={HEADER.breadcrumb}>
            <HeadingOffset
                className='mb-4 text-center text-md-start'
                option={{level: "h1", variant: "regular"}}>Frequently Asked Questions</HeadingOffset>
            <ListBullet
                className='mt-5 text-center text-md-start'
                items={HEADER.list} />
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