import React, {Fragment} from 'react';

import type {HeadingLevelProps, MainSizeProps} from "@/@type/common";
import type {FadeInPositionProps, FadeInDelayProps} from "@/components/animation/fade/useFadeIn";

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
        animation?: {
            position?: FadeInPositionProps;
            delay?: FadeInDelayProps;
        }
    };
    children: React.ReactNode;
};

const HeadingOffset = ({className, option, children}: HeadingOffsetProps): React.ReactElement => {
    const Heading = option?.level ?? 'h2';
    const HeadingWrapper = option?.hasLine ? 'div' : Fragment;

    const fadeAnimationProps = {
        'data-animation': 'fade-in',
        'data-animation-direction': 'up',
        ...option?.animation?.position ? {'data-animation-position': option.animation.position} : {},
        ...option?.animation?.delay ? {'data-animation-delay': option.animation.delay} : {},
    }

    if (option?.variant === 'regular') {
        return (
            <HeadingWrapper {...option?.hasLine && {...{className: 'heading-wrapper'}, ...fadeAnimationProps}}>
                <Heading
                    className={`heading--large${className ? ` ${className}` : ''}`}
                    {...!option?.hasLine && fadeAnimationProps} >{children}</Heading>
                {option?.hasLine && <Picture images={option.hasLine} />}
            </HeadingWrapper>
        )
    }

    return (
        <Row
            className={`justify-content-center${className ? ` ${className}` : ''}`}
            {...fadeAnimationProps}>
            <Col lg={option?.size === 'lg' ? 8 : 6}>
                <Heading className='heading--large'>{children}</Heading>
                {option?.subHeading && <p>{option.subHeading}</p>}
            </Col>
        </Row>
    )
};

export default HeadingOffset;