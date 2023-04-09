import React, {Fragment} from 'react';

import {HeadingLevelProps, MainSizeProps} from "@/@type/common";

import {Col, Row} from "react-bootstrap";
import Picture, {PictureItemProps} from "@/components/common/picture/Picture";

export type HeadingOffsetProps = {
    className?: string;
    option?: {
        variant?: 'offset' | 'regular';
        level?: HeadingLevelProps;
        size?: MainSizeProps;
        hasLine?: PictureItemProps[];
        subHeading?: string;
    };
    children: React.ReactNode;
};

const HeadingOffset = ({className, option, children}: HeadingOffsetProps): React.ReactElement => {
    const Heading = option?.level ?? 'h2';
    const HeadingWrapper = option?.hasLine ? 'div' : Fragment;

    if (option?.variant === 'regular') {
        return (
            <HeadingWrapper {...option?.hasLine && {className: 'heading-wrapper'}}>
                <Heading className={`heading--large${className ? ` ${className}` : ''}`}>{children}</Heading>
                {option?.hasLine && <Picture images={option.hasLine} />}
            </HeadingWrapper>
        )
    }

    return (
        <Row className={`justify-content-center${className ? ` ${className}` : ''}`}>
            <Col lg={option?.size === 'lg' ? 8 : 6}>
                <Heading className='heading--large'>{children}</Heading>
                {option?.subHeading && <p>{option.subHeading}</p>}
            </Col>
        </Row>
    )
};

export default HeadingOffset;