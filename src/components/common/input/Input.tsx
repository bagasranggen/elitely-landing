import React, { useState } from 'react';
import dynamic from "next/dynamic";

import type { MainColorProps, MainVariantProps } from "@/@type/common";
import type { MainSizeProps } from "@/@type/common";

import { InputSelectProps as ComponentInputSelectProps } from "@/components/common/input/inputSelect/InputSelect";

import 'react-phone-number-input/style.css';

const InputSelect = dynamic(import('@/components/common/input/inputSelect/InputSelect'), { ssr: false });
const PhoneInput = dynamic(import('react-phone-number-input'), { ssr: false });

type InputRegularProps = {
    type?: 'text' | 'email' | 'number' | 'tel' | 'tel-with-flag';
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
        required?: boolean;
    } & (InputRegularProps | InputSelectProps))
};

const Input = ({ className, option, input }: InputProps): React.ReactElement => {
    const formStyle = option?.variant ? `form--${option.variant}` : '';
    const formColor = option?.color ? ` form--${option.color}` : '';
    const formSize = (option?.size && option?.size !== 'md') ? ` form--${option.size}` : '';
    const formIsDropdown = input.type === 'select' ? ' form--dropdown' : '';
    const formClass = `${formStyle}${formIsDropdown}${formColor}${formSize}${className ? ` ${className}` : ''}`;

    const InputBlock = option?.isMultiline ? 'textarea' : 'input';

    let inputElement: any = '';

    const [ value, setValue ] = useState<string>();

    switch (input.type) {
        case 'select':
            inputElement = <InputSelect input={input} />;
            break;

        case 'tel-with-flag':
            inputElement = <>
                <input
                    id={input.id}
                    name={input.id}
                    type="text"
                    defaultValue={value}
                    {...input?.required && { required: input?.required }}
                    hidden />
                <PhoneInput
                    placeholder={input.placeholder}
                    defaultCountry="SG"
                    value={value}
                    onChange={setValue}
                />
            </>;
            break;

        default:
            inputElement = <InputBlock
                {...!option?.isMultiline && { type: input?.type ?? 'text' }}
                {...option?.isMultiline && { rows: typeof option.isMultiline === 'number' ? option.isMultiline : 5 }}
                {...input?.required && { required: input?.required }}
                className={`form-control${option?.align ? ` text-${option.align}` : ''}`}
                id={input.id}
                placeholder={input.placeholder} />;
            break;
    }

    return (
        <div className={formClass}>
            {input.label && <label
                htmlFor={input.id}
                className="form-label">{input.label}</label>}
            {inputElement}
        </div>
    );
};

export default Input;