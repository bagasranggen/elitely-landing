import React from 'react';

import { createAnimation } from "@/components/animation/helper";

import { Col, Container, Row } from "react-bootstrap";
import HeaderHead from "@/components/layout/header/headerHead/HeaderHead";
import Input from "@/components/common/input/Input";
import Button, { ButtonContainer } from "@/components/common/button/Button";
import Checkbox from "@/components/common/checkbox/Checkbox";
import HeadingOffset from "@/components/common/heading/headingOffset/HeadingOffset";

export type IndexProps = {};

const Index = ({}: IndexProps): React.ReactElement => (
    <>
        <HeaderHead />

        <Container className="my-5">

            <Row className="justify-content-end form-sign__wrapper">
                <Col
                    md={6}
                    xl={4}>

                    <HeadingOffset
                        className="mb-3"
                        option={{
                            level: "h1",
                            variant: "regular",
                            size: 'md',
                            animation: { position: "top" }
                        }}>Welcome to Elitely</HeadingOffset>

                    <Row
                        className="mb-3 form-sign__greetings" {...createAnimation({
                        type: 'fade-in',
                        position: 'top',
                        direction: 'up',
                        delay: .15,
                    })}>
                        <Col><p>Join our Pre-Launch Campaign!</p></Col>
                    </Row>

                    <form
                        action=""
                        onSubmit={(e: any) => {
                            e.preventDefault();
                            console.log(e);
                        }}
                        {...createAnimation({ type: 'fade-in', direction: 'up', delay: .3 })}>

                        <Input
                            className="mb-3"
                            option={{ variant: 'block', color: 'primary' }}
                            input={{ type: 'text', id: 'signName', placeholder: '*Name', required: true }} />

                        <Input
                            className="mb-3"
                            option={{ variant: 'block', color: 'primary' }}
                            input={{ type: 'email', id: 'signEmail', placeholder: '*Email address', required: true }} />

                        <Input
                            className="mb-3"
                            option={{ variant: 'block', color: 'primary' }}
                            input={{
                                type: 'tel-with-flag',
                                id: 'signTel',
                                placeholder: '*Phone number',
                                required: true
                            }} />

                        <Input
                            className="mb-3"
                            option={{ variant: 'block', color: 'primary' }}
                            input={{ type: 'email', id: 'signEmail', placeholder: 'Instagram Handle' }} />

                        <Input
                            className="mb-3"
                            option={{ variant: 'block', color: 'primary' }}
                            input={{ type: 'email', id: 'signEmail', placeholder: 'Tiktok Handle' }} />

                        <Checkbox
                            option={{ variant: 'regular' }}
                            checkbox={{
                                id: 'newsOpt',
                                label: 'Get info on trending content, newsletter, promotions, reccomendations and account updates via your email',
                                value: 'newsOpt'
                            }} />

                        <ButtonContainer className="mt-3 text-center">
                            <Button
                                option={{ variant: 'regular', color: 'primary', size: 'lg' }}
                                button={{ type: "submit", label: 'Sign Up' }} />
                        </ButtonContainer>
                    </form>
                </Col>
            </Row>
        </Container>
    </>
);

export default Index;