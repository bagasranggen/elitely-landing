import React from 'react';

import type {MainColorProps} from "@/@type/common";
import type {FadeInProps} from "@/components/animation/fade/useFadeIn";

import {createAnimation} from "@/components/animation/helper";

import LogoHeartCircle from "@/components/common/logo/logoHeartCircle/LogoHeartCircle";

export type LogoHeartLineDiagonalProps = {
    className?: string;
    color?: MainColorProps;
    options?: {
        variant?: 'left' | 'right' | 'angled';
        animation?: FadeInProps["options"];
    }
};

const LogoHeartLineDiagonal = ({className, color, options}: LogoHeartLineDiagonalProps): React.ReactElement => {
    let line: React.ReactNode = <></>;
    let lineClass: string = ' heart-line--'

    const animation = options?.animation ? createAnimation(options.animation) : {}

    switch (options?.variant) {
        case 'angled':
            lineClass += options.variant;
            line = <svg
                width="121"
                height="78"
                viewBox="0 0 121 78"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M-137 1H17V77H121"
                    stroke="black"
                    stroke-dasharray="6 6" />
            </svg>
            break;

        case 'right':
            lineClass += options.variant;
            line = <svg
                width="264"
                height="159"
                viewBox="0 0 264 159"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M293.249 1.00024C293.249 1.00024 273.21 98.7643 147.389 144.407C21.5682 190.051 1.08792 106.985 1.08792 106.985"
                    stroke="black"
                    stroke-dasharray="6 6" />
            </svg>
            break;

        default:
            lineClass += 'left'
            line = <svg
                width="205"
                height="100"
                viewBox="0 0 205 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M-124 1C-62 7.66667 90.4 36.6 204 99"
                    stroke="black"
                    stroke-dasharray="6 6" />
            </svg>
            break;
    }

    return (
        <div className={`decorative heart-line-wrapper${className ? ` ${className}` : ''}`} {...animation}>
            <div className={`heart-line${lineClass}`}>
                {line}
                <LogoHeartCircle color={color ?? "primary"} />
            </div>
        </div>
    )
};

export default LogoHeartLineDiagonal;