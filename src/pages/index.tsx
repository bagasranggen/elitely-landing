import React from 'react';

import { Col, Container, Row } from "react-bootstrap";
import HeaderHead from "@/components/layout/header/headerHead/HeaderHead";
import Input from "@/components/common/input/Input";
import Button, { ButtonContainer } from "@/components/common/button/Button";
import Checkbox from "@/components/common/checkbox/Checkbox";

export type IndexProps = {};

const Index = ({}: IndexProps): React.ReactElement => (
    <>
        <HeaderHead />

        <Container className="my-5">

            <Row className="justify-content-end form-sign__wrapper">
                <Col
                    md={6}
                    xl={4}>
                    <h1 className="mb-3">Welcome to Elitely</h1>

                    <Row className="mb-3 form-sign__greetings">
                        <Col><p>Join our Pre-Launch Campaign!</p></Col>
                        <Col xs="auto"><a
                            href="#"
                            className="text-decoration-underline">Sign In</a></Col>
                    </Row>

                    <form
                        action=""
                        onSubmit={(e: any) => {
                            e.preventDefault();
                            console.log(e);
                        }}>

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