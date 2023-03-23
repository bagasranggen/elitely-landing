import React from 'react';
import Image from "next/image";

import {MAIN_NAVIGATION} from "@/data/mock/global";

import logo from '@/assets/images/logo.svg'

import {Col, Container, Nav, Navbar} from "react-bootstrap";
import Button from "@/components/common/button/Button";

export type NavigationProps = {};

const Navigation = ({}: NavigationProps): React.ReactElement => (
    <Navbar
        className='navbar--primary'
        variant='dark'
        expand="lg">
        <Container>
            <Col xs='auto'>
                <Navbar.Brand href="#home">
                    <Image
                        src={logo}
                        alt='elitely' />
                </Navbar.Brand>
            </Col>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    {MAIN_NAVIGATION.map((nav: any) => (
                        <Nav.Link
                            key={nav.uri}
                            className={nav.uri === '/' ? 'active' : ''}
                            href={nav.uri}>{nav.label}</Nav.Link>
                    ))}
                </Nav>
                <Nav className='align-items-center'>
                    <Button
                        option={{variant: 'outline', color: 'primary'}}
                        link={{href: '#', label: 'Login'}} />
                    <Button
                        option={{variant: 'block', color: 'light'}}
                        button={{type: 'button', label: 'Contact Us'}} />
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

);

export default Navigation;