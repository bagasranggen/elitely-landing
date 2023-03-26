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
        variant: Pick<MainVariantProps, 'block' | 'outline' | 'unstyled'>;
        color: MainColorProps;
        size?: Pick<MainSizeProps, 'md' | 'lg'>;
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

    const buttonWrapperProps = link ? {
        ...btnClass ? {className: btnClass} : {},
        href: link.href,
        ...link.openNewTab ? {target: '_blank'} : {},
        onClick: event?.onClick,
    } : {
        ...btnClass ? {className: btnClass} : {},
        type: button?.type ?? 'button',
        onClick: event?.onClick,
    }

    return <ButtonWrapper {...buttonWrapperProps}>{link?.label || button?.label}</ButtonWrapper>
}

export default Button;