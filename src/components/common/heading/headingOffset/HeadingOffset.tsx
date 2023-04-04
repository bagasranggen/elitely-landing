import React from 'react';
import {Col, Row} from "react-bootstrap";
import {HeadingLevelProps, MainSizeProps} from "@/@type/common";

export type HeadingOffsetProps = {
    className?: string;
    option?: {
        variant?: 'offset' | 'regular';
        level?: HeadingLevelProps;
        size?: MainSizeProps;
    };
    children: React.ReactNode;
};

const HeadingOffset = ({className, option, children}: HeadingOffsetProps): React.ReactElement => {
    const Heading = option?.level ?? 'h2'

    return (
        <Row className={`justify-content-center${className ? ` ${className}` : ''}`}>
            <Col lg={option?.size === 'lg' ? 8 : 6}>
                <Heading className='heading--large'>{children}</Heading>
            </Col>
        </Row>
    )
};

export default HeadingOffset;