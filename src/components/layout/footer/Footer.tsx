import React from 'react';
import Image from "next/image";

import { createAnimation } from "@/components/animation/helper";

import logo from "@/assets/images/logo.svg";

import { Col, Container, Row } from "react-bootstrap";
import Button from "@/components/common/button/Button";
import Input from "@/components/common/input/Input";

export type FooterProps = {};

const Footer = ({}: FooterProps): React.ReactElement => (
    <footer {...createAnimation({ type: 'fade-in', direction: "up", position: "top" })}>
        <Container>
            <Row className="gy-4 justify-content-between">
                <Col md={8}>
                    <Image
                        src={logo}
                        alt="elitely" />
                    <p>The world’s first social media platform where users can pay a small fee to
                        unlock chats and meets
                        ups with other users on our platform, who have been qualified as interesting Personalities or
                        Influencers. </p>
                </Col>
                <Col md={3}>
                    <h2>Newsletter</h2>
                    <form action="">
                        <Input
                            className="mt-3 mb-3"
                            option={{ variant: 'outline', color: 'light', size: 'lg', align: 'center' }}
                            input={{ id: 'subscribe', placeholder: 'Your email' }} />
                        <Button
                            option={{ variant: 'block', color: 'light', size: 'lg', fullWidth: true }}
                            button={{ type: 'submit', label: 'Subscribe' }} />
                    </form>
                </Col>
            </Row>
            <div className="footer__copyright">
                <small>Elitely @copyright 2023</small>
            </div>
        </Container>
    </footer>
);

export default Footer;