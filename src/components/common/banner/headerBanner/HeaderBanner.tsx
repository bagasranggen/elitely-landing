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
            <Breadcrumb items={breadcrumb} />
            {children}
        </Container>
    </section>
);

export default HeaderBanner;