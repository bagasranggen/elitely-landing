import React, {Fragment} from 'react';
import Link from "next/link";

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
        variant: 'block' | 'outline' | 'unstyled';
        color: 'primary' | 'secondary' | 'tertiary' | 'light';
    };
    event?: {
        onClick?: (e: any) => void;
    }
} & (AnchorProps | ButtonActionProps);

const Button = ({button, className, event, link, option}: ButtonProps): React.ReactElement => {
    const ButtonWrapper = link ? Link : 'button';

    const btnStyle = option?.variant ? ` btn--${option.variant}` : ''
    const btnColor = option?.color ? ` btn--${option.color}` : '';
    const btnClass = `${option?.variant !== 'unstyled' ? 'btn' : ''}${btnStyle}${btnColor}${className ? ` ${className}` : ''}`;

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