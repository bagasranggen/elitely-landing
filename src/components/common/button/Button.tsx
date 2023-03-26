import React from 'react';
import Link from "next/link";

import type {MainColorProps, MainSizeProps, MainVariantProps} from "@/@type/common";

type ButtonContainerProps = {
    className?: string;
    children: React.ReactNode;
}

export const ButtonContainer = ({className, children}: ButtonContainerProps): React.ReactElement => (
    <div className={className}>
        {children}
    </div>
)

type AnchorProps = {
    link: {
        href: string;
        label: string;
        openNewTab?: boolean;
    };
    button?: never;
}

type ButtonActionProps = {
    link?: never;
    button: {
        type: 'submit' | 'reset' | 'button';
        label: string;
    }
}

export type ButtonProps = {
    className?: string;
    option?: {
        variant: MainVariantProps;
        color: MainColorProps;
        size?: MainSizeProps;
        hasArrow?: boolean;
        fullWidth?: boolean;
    };
    event?: {
        onClick?: (e: any) => void;
    }
} & (AnchorProps | ButtonActionProps);

const Button = ({button, className, event, link, option}: ButtonProps): React.ReactElement => {
    const ButtonWrapper = link ? Link : 'button';

    const btnStyle = option?.variant ? ` btn--${option.variant}` : ''
    const btnColor = option?.color ? ` btn--${option.color}` : '';
    const btnSize = (option?.size && option?.size !== 'md') ? ` btn--${option.size}` : '';
    const btnClass = `${option?.variant !== 'unstyled' ? 'btn' : ''}${btnStyle}${btnColor}${btnSize}${option?.fullWidth ? ' w-100' : ''}${className ? ` ${className}` : ''}`;

    const arrow = <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.172 9.00008L5.92552e-07 9.00007L7.67397e-07 7.00007L12.172 7.00008L6.808 1.63608L8.222 0.222076L16 8.00008L8.222 15.7781L6.808 14.3641L12.172 9.00008Z"
            fill="#B2294B" />
    </svg>

    const buttonWrapperProps: any = link ? {
        ...btnClass ? {className: btnClass} : {},
        href: link.href,
        ...link.openNewTab ? {target: '_blank'} : {},
        onClick: event?.onClick,
    } : {
        ...btnClass ? {className: btnClass} : {},
        type: button?.type ?? 'button',
        onClick: event?.onClick,
    }

    return <ButtonWrapper {...buttonWrapperProps}>{link?.label || button?.label}{option?.hasArrow ? arrow : null}</ButtonWrapper>
}

export default Button;