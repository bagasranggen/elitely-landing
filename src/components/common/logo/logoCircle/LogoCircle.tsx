import React from 'react';
import {FadeInProps} from "@/components/animation/fade/useFadeIn";
import {createAnimation} from "@/components/animation/helper";

export type LogoCircleProps = {
    options?: {
        animation: FadeInProps["options"]
    }
};

const LogoCircle = ({options}: LogoCircleProps): React.ReactElement => {
    const animation = options?.animation ? createAnimation(options.animation) : {}

    return (
        <div className="decorative circle-line" {...animation}>
            <svg
                width="73"
                height="153"
                viewBox="0 0 73 153"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle
                    cx="76.5"
                    cy="76.5"
                    r="69.5"
                    stroke="#B2294B"
                    strokeWidth="14" />
            </svg>
        </div>
    )
};

export default LogoCircle;