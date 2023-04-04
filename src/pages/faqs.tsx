import React from 'react';
import Accordion from "@/components/common/accordion/Accordion";
import {FAQS} from "@/data/mock/faqs";
import {Container} from "react-bootstrap";
import HeadingOffset from "@/components/common/heading/headingOffset/HeadingOffset";

export type FaqsProps = {};

const Faqs = ({}: FaqsProps): React.ReactElement => (
    <>
        {Object.keys(FAQS).map((key: string) => (
            <Container
                key={key}
                className='section-faqs'>
                <HeadingOffset
                    option={{variant: "regular"}}
                    className='mb-4 text-center text-lg-start'>{FAQS[key].title}</HeadingOffset>
                <Accordion
                    color={FAQS[key].color}
                    items={FAQS[key].items} />
            </Container>
        ))}
    </>
);

export default Faqs;