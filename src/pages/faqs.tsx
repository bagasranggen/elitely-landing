import React from 'react';
import Accordion from "@/components/common/accordion/Accordion";
import {FAQS} from "@/data/mock/faqs";
import {Container} from "react-bootstrap";

export type FaqsProps = {};

const Faqs = ({}: FaqsProps): React.ReactElement => (
    <>
        <Container className='my-5'>
            <Accordion
                color={FAQS.GENERAL.color}
                items={FAQS.GENERAL.items} />
        </Container>
    </>
);

export default Faqs;