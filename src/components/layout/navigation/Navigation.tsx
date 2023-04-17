import React, {forwardRef, useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";

import {useIsMobile} from "@/libs/hooks";

import {MAIN_NAVIGATION} from "@/data/mock/global";

import logo from '@/assets/images/logo.svg'

import {Col, Container, Nav, Navbar} from "react-bootstrap";
import Button from "@/components/common/button/Button";

export type NavigationProps = {};

const Navigation = forwardRef<HTMLElement, NavigationProps>((props, ref) => {
    const {asPath} = useRouter();
    const router = useRouter();
    const isMobile = useIsMobile('lg');

    const [expanded, setExpanded] = useState<boolean>(false);

    const navbarToggleHandler = (open: boolean) => {
        setExpanded(open);
        if (!open) {
            const body = document.querySelector('body');

            if (body) body.style.overflow = '';
        }
    }

    return (
        <Navbar
            ref={ref}
            className='navbar--primary'
            variant='dark'
            expand="lg"
            sticky='top'
            expanded={expanded}
            // collapseOnSelect={true}
            onToggle={(expanded: boolean) => {
                const body = document.querySelector('body');

                if (body) body.style.overflow = expanded ? 'hidden' : '';
            }}>
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
                                href={nav.uri}
                                onClick={() => isMobile && navbarToggleHandler(false)}>{nav.label}</Nav.Link>
                        ))}
                    </Nav>
                    <Nav className='align-items-center'>
                        <Button
                            option={{variant: 'outline', color: 'primary'}}
                            link={{href: '#', label: 'Login'}}
                            event={{onClick: () => isMobile && navbarToggleHandler(false)}} />
                        <Button
                            option={{variant: 'block', color: 'light'}}
                            link={{href: '/contact-us', label: 'Contact Us'}}
                            event={{onClick: () => isMobile && navbarToggleHandler(false)}} />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
})

// const Navigation = ({}: NavigationProps): React.ReactElement => (
//     <Navbar
//         className='navbar--primary'
//         variant='dark'
//         expand="lg">
//         <Container>
//             <Col xs='auto'>
//                 <Navbar.Brand href="#home">
//                     <Image
//                         src={logo}
//                         alt='elitely' />
//                 </Navbar.Brand>
//             </Col>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="mx-auto">
//                     {MAIN_NAVIGATION.map((nav: any) => (
//                         <Nav.Link
//                             key={nav.uri}
//                             className={nav.uri === '/' ? 'active' : ''}
//                             href={nav.uri}>{nav.label}</Nav.Link>
//                     ))}
//                 </Nav>
//                 <Nav className='align-items-center'>
//                     <Button
//                         option={{variant: 'outline', color: 'primary'}}
//                         link={{href: '#', label: 'Login'}} />
//                     <Button
//                         option={{variant: 'block', color: 'light'}}
//                         button={{type: 'button', label: 'Contact Us'}} />
//                 </Nav>
//             </Navbar.Collapse>
//         </Container>
//     </Navbar>
//
// );

Navigation.displayName = 'Navigation'
export default Navigation;