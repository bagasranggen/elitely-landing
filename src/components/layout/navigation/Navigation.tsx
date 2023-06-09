import React, {forwardRef, useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";

import {MAIN_NAVIGATION} from "@/data/mock/global";

import logo from '@/assets/images/logo.svg'

import {Col, Container, Nav, Navbar} from "react-bootstrap";
import Button from "@/components/common/button/Button";

export type NavigationProps = {};

const Navigation = forwardRef<HTMLElement, NavigationProps>((props, ref) => {
    const {asPath} = useRouter();
    const router = useRouter();

    const [expanded, setExpanded] = useState<boolean>(false);

    const navbarToggleHandler = (open: boolean) => {
        const body = document.querySelector('body');

        if (body) body.style.overflow = open ? 'hidden' : '';
        setExpanded(open);
    }

    useEffect(() => {
        const handleEnd = () => navbarToggleHandler(false);

        router.events.on("routeChangeComplete", handleEnd);
        router.events.on("routeChangeError", handleEnd);

        return () => {
            router.events.off("routeChangeComplete", handleEnd);
            router.events.off("routeChangeError", handleEnd);
        };
    }, [router.events])

    return (
        <Navbar
            ref={ref}
            className='navbar--primary'
            variant='dark'
            expand="lg"
            sticky='top'
            expanded={expanded}
            onToggle={(expanded: boolean) => navbarToggleHandler(expanded)}>
            <Container>
                <Col xs='auto'>
                    <Navbar.Brand
                        href="/"
                        as={Link}>
                        <Image
                            src={logo}
                            alt='elitely' />
                    </Navbar.Brand>
                </Col>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={() => navbarToggleHandler(!expanded)} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        {MAIN_NAVIGATION.map((nav: any) => (
                            <Nav.Link
                                key={nav.uri}
                                as={Link}
                                className={`${nav?.options?.isBold ? 'fw-bold' : ''}${nav.uri === asPath ? ' active' : ''}`}
                                href={nav.uri}>{nav.label}</Nav.Link>
                        ))}
                    </Nav>
                    <Nav className='align-items-center'>
                        <Button
                            option={{variant: 'outline', color: 'primary'}}
                            link={{href: '#', label: 'Login'}} />
                        <Button
                            option={{variant: 'block', color: 'light'}}
                            link={{href: '/contact-us', label: 'Contact Us'}} />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
})

Navigation.displayName = 'Navigation'
export default Navigation;