import React from 'react';

import type {MainColorProps, MainVariantProps} from "@/@type/common";

export type InputProps = {
    className?: string;
    option?: {
        variant?: MainVariantProps;
        color?: MainColorProps;
        align?: 'start' | 'center' | 'end';
        // fullWidth?: boolean;
    };
    input: {
        id: string;
        type?: 'text' | 'email' | 'number';
        label?: string;
        placeholder?: string;
    }
};

const Input = ({className, option, input}: InputProps): React.ReactElement => {
    const formStyle = option?.variant ? ` form--${option.variant}` : '';
    const formColor = option?.color ? ` form--${option.color}` : '';
    const formClass = `${formStyle}${formColor}${className ? ` ${className}` : ''}`

    return (
        <div className={formClass}>
            {input.label && <label
                htmlFor={input.id}
                className="form-label">{input.label}</label>}
            <input
                type={input?.type ?? 'text'}
                className={`form-control${option?.align ? ` text-${option.align}` : ''}`}
                id={input.id}
                placeholder={input.placeholder} />
        </div>
    )
};

export default Input;