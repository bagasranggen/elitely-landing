import React, { Fragment } from 'react';

import type { HeadingLevelProps, MainSizeProps } from "@/@type/common";
import type { FadeInPositionProps, FadeInDelayProps } from "@/components/animation/fade/useFadeIn";

import { createAnimation } from "@/components/animation/helper";
import { useMeasure } from "react-use";

import { Col, Row } from "react-bootstrap";
import Picture, { PictureItemProps } from "@/components/common/picture/Picture";

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

const HeadingOffset = ({ className, option, children }: HeadingOffsetProps): React.ReactElement => {
    const Heading = option?.level ?? 'h2';
    const HeadingWrapper = option?.hasLine ? 'div' : Fragment;
    const [ headingRef, { height } ]: any = useMeasure();

    const fadeAnimationProps = {
        'data-animation': 'fade-in',
        'data-animation-direction': 'up',
        ...option?.animation ? createAnimation(option.animation) : {},
    };

    if (option?.variant === 'regular') {
        const isTwoLines = height > 50;

        return (
            <HeadingWrapper {...option?.hasLine && { ...{ className: 'heading-wrapper' }, ...fadeAnimationProps }}>
                <Heading
                    ref={headingRef}
                    className={`heading--${option?.size ?? 'lg'}${className ? ` ${className}` : ''}`}
                    {...!option?.hasLine && fadeAnimationProps} >{children}</Heading>
                {option?.hasLine && Array.from(Array(isTwoLines ? 2 : 1), (_: any, i: number) => {
                    if (option?.hasLine) return <Picture
                        key={i}
                        className={(isTwoLines && i === 0) ? 'img--two-lines' : ''}
                        images={option.hasLine}
                        {...(isTwoLines && i === 0) ? { options: { style: { '--line-bottom-offset': `${height / 2}px` } as React.CSSProperties } } : {}} />;
                })}
            </HeadingWrapper>
        );
    }

    return (
        <Row
            className={`justify-content-center${className ? ` ${className}` : ''}`}
            {...fadeAnimationProps}>
            <Col lg={option?.size === 'lg' ? 8 : 6}>
                <Heading className={`heading--${option?.size ?? 'lg'}`}>{children}</Heading>
                {option?.subHeading && <p>{option.subHeading}</p>}
            </Col>
        </Row>
    );
};

export default HeadingOffset;