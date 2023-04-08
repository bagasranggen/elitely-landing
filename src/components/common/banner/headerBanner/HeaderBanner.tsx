import React from 'react';

import {MainColorProps} from "@/@type/common";

import Breadcrumb, {BreadcrumbProps} from "@/components/common/breadcrumb/Breadcrumb";
import {Container} from "react-bootstrap";

export type HeaderBannerProps = {
    breadcrumb: BreadcrumbProps['items'];
    className?: string;
    color?: MainColorProps;
    children?: React.ReactNode;
};

const HeaderBanner = ({breadcrumb, className, color, children}: HeaderBannerProps): React.ReactElement => (
    <section className={`header-banner${color ? ` header-banner--${color}` : ''}${className ? ` ${className}` : ''}`}>
        <Container>
            {/*<Row className='justify-content-center'>*/}
            {/*    <Col>*/}
            <Breadcrumb items={breadcrumb} />
            {children}
            {/*</Col>*/}
            {/*</Row>*/}
        </Container>
    </section>
);

export default HeaderBanner;