import React from 'react';

import type {MainColorProps, MainVariantProps} from "@/@type/common";
import type {MainSizeProps} from "@/@type/common";

import InputSelect, {
    InputSelectProps as ComponentInputSelectProps
} from "@/components/common/input/inputSelect/InputSelect";

type InputRegularProps = {
    type?: 'text' | 'email' | 'number' | 'tel';
    options?: never;
}

type InputSelectProps = {
    type?: 'select';
    options: ComponentInputSelectProps["input"]["options"];
}

export type InputProps = {
    className?: string;
    option?: {
        variant?: MainVariantProps;
        color?: MainColorProps;
        size?: MainSizeProps;
        align?: 'start' | 'center' | 'end';
        isMultiline?: boolean | number;
    };
    input: ({
        id: string;
        label?: string;
        placeholder?: string;
    } & (InputRegularProps | InputSelectProps))
};

const Input = ({className, option, input}: InputProps): React.ReactElement => {
    const formStyle = option?.variant ? `form--${option.variant}` : '';
    const formColor = option?.color ? ` form--${option.color}` : '';
    const formSize = (option?.size && option?.size !== 'md') ? ` form--${option.size}` : '';
    const formIsDropdown = input.type === 'select' ? ' form--dropdown' : ''
    const formClass = `${formStyle}${formIsDropdown}${formColor}${formSize}${className ? ` ${className}` : ''}`

    const InputBlock = option?.isMultiline ? 'textarea' : 'input'

    return (
        <div className={formClass}>
            {input.label && <label
                htmlFor={input.id}
                className="form-label">{input.label}</label>}
            {input.type === 'select' ? <InputSelect input={input} /> : <InputBlock
                {...!option?.isMultiline && {type: input?.type ?? 'text'}}
                {...option?.isMultiline && {rows: typeof option.isMultiline === 'number' ? option.isMultiline : 5}}
                className={`form-control${option?.align ? ` text-${option.align}` : ''}`}
                id={input.id}
                placeholder={input.placeholder} />}
        </div>
    )
};

export default Input;