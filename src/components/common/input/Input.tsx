import React from 'react';

import type {MainColorProps, MainVariantProps} from "@/@type/common";
import {MainSizeProps} from "@/@type/common";

export type InputProps = {
    className?: string;
    option?: {
        variant?: Pick<MainVariantProps, 'outline' | 'regular'>;
        color?: MainColorProps;
        size?: Pick<MainSizeProps, 'md' | 'lg'>;
        align?: 'start' | 'center' | 'end';
        isMultiline?: boolean | number;
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
    const formStyle = option?.variant ? `form--${option.variant}` : '';
    const formColor = option?.color ? ` form--${option.color}` : '';
    const formSize = (option?.size && option?.size !== 'md') ? ` form--${option.size}` : '';
    const formClass = `${formStyle}${formColor}${formSize}${className ? ` ${className}` : ''}`

    const InputBlock = option?.isMultiline ? 'textarea' : 'input'

    return (
        <div className={formClass}>
            {input.label && <label
                htmlFor={input.id}
                className="form-label">{input.label}</label>}
            {/*<input*/}
            {/*    type={input?.type ?? 'text'}*/}
            {/*    className={`form-control${option?.align ? ` text-${option.align}` : ''}`}*/}
            {/*    id={input.id}*/}
            {/*    placeholder={input.placeholder} />*/}
            <InputBlock
                // type={input?.type ?? 'text'}
                {...!option?.isMultiline && {type: input?.type ?? 'text'}}
                {...option?.isMultiline && {rows: typeof option.isMultiline === 'number' ? option.isMultiline : 5}}
                className={`form-control${option?.align ? ` text-${option.align}` : ''}`}
                id={input.id}
                placeholder={input.placeholder} />
        </div>
    )
};

export default Input;