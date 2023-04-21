import React from 'react';

import {CATEGORY} from "@/data/mock/forms";

import {createAnimation} from "@/components/animation/helper";

import {Col, Row} from "react-bootstrap";
import Input from "@/components/common/input/Input";
import Button from "@/components/common/button/Button";

export type ContactUsProps = {
    className?: string;
    heading?: string;
};

const ContactUsForm = ({className, heading}: ContactUsProps): React.ReactElement => (
    <form
        className={className}
        {...createAnimation({type: "fade-in", direction: 'up', delay: .25})}>

        {heading && <h2>{heading}</h2>}

        <Input
            className='mb-3'
            option={{variant: 'regular'}}
            input={{type: 'text', id: 'name', placeholder: 'Name'}} />
        <Input
            className='mb-3'
            option={{variant: 'regular'}}
            input={{type: 'tel', id: 'phone', placeholder: 'Phone Number'}} />
        <Input
            className='mb-3'
            input={{type: 'select', id: 'category', placeholder: 'Category', options: CATEGORY}} />
        <Input
            className='mb-3'
            option={{variant: 'regular', isMultiline: true}}
            input={{type: 'text', id: 'message', placeholder: 'Message'}} />

        <Row className='mt-5 justify-content-center'>
            <Col md={5}>
                <Button
                    className='w-100'
                    option={{variant: 'block', color: 'primary', size: 'lg'}}
                    button={{type: "submit", label: 'Send'}} />
            </Col>
        </Row>
    </form>
);

export default ContactUsForm;