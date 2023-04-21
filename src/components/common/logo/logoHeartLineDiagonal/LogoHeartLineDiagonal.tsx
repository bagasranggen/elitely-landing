import React from 'react';

import type {MainColorProps} from "@/@type/common";
import type {FadeInProps} from "@/components/animation/fade/useFadeIn";

import {createAnimation} from "@/components/animation/helper";

import LogoHeartCircle from "@/components/common/logo/logoHeartCircle/LogoHeartCircle";
import LogoHeart from "@/components/common/logo/logoHeart/LogoHeart";

export type LogoHeartLineDiagonalProps = {
    className?: string;
    color?: MainColorProps;
    options?: {
        variant?: 'left' | 'right' | 'bent-left' | 'bent-right' | 'angled';
        animation?: FadeInProps["options"];
    }
};

const LogoHeartLineDiagonal = ({className, color, options}: LogoHeartLineDiagonalProps): React.ReactElement => {
    let line: React.ReactNode = <></>;
    const lineClass: string = `heart-line heart-line--${options?.variant ?? 'left'}`


    const Heart = options?.variant === 'bent-left' || options?.variant === 'bent-right' ? LogoHeart : LogoHeartCircle;
    const animation = options?.animation ? createAnimation(options.animation) : {}

    switch (options?.variant) {
        case 'angled':
            line = <svg
                width="121"
                height="78"
                viewBox="0 0 121 78"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M-137 1H17V77H121"
                    stroke="black"
                    strokeDasharray="6 6" />
            </svg>
            break;

        case 'bent-right':
            line = <svg
                width="116"
                height="165"
                viewBox="0 0 116 165"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M140.09 163.319C97.4232 161.319 10.0898 144.919 2.08984 95.3193C-5.91016 45.7193 32.0898 11.986 52.0898 1.31934"
                    stroke="#2D2D2D"
                    strokeWidth="2"
                    strokeDasharray="6 6" />
            </svg>
            break;

        case 'bent-left':
            line = <svg
                width="97"
                height="165"
                viewBox="0 0 97 165"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M-44 163.245C-1.33333 161.245 86 144.845 94 95.2446C102 45.6446 64 11.9113 44 1.24463"
                    stroke="#2D2D2D"
                    strokeWidth="2"
                    strokeDasharray="6 6" />
            </svg>
            break;

        case 'right':
            line = <svg
                width="264"
                height="159"
                viewBox="0 0 264 159"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M293.249 1.00024C293.249 1.00024 273.21 98.7643 147.389 144.407C21.5682 190.051 1.08792 106.985 1.08792 106.985"
                    stroke="black"
                    strokeDasharray="6 6" />
            </svg>
            break;

        default:
            line = <svg
                width="205"
                height="100"
                viewBox="0 0 205 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M-124 1C-62 7.66667 90.4 36.6 204 99"
                    stroke="black"
                    strokeDasharray="6 6" />
            </svg>
            break;
    }

    return (
        <div className={`decorative heart-line-wrapper${className ? ` ${className}` : ''}`} {...animation}>
            <div className={lineClass}>
                {line}
                <Heart color={color ?? 'primary'} />
                {/*<LogoHeartCircle color={color ?? "primary"} />*/}
                {/*<LogoHeart color={color ?? 'primary'} />*/}
            </div>
        </div>
    )
};

export default LogoHeartLineDiagonal;