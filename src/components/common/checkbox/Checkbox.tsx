import React from 'react';

import type { MainVariantProps } from "@/@type/common";

export type CheckboxProps = {
    className?: string;
    option?: {
        variant?: MainVariantProps;
    };
    checkbox: {
        id: string;
        label: string;
        value: string;
    }
};

const Checkbox = ({ className, checkbox, option }: CheckboxProps): React.ReactElement => {
    const checkboxVariant = option?.variant ? ` form-check--${option.variant}` : '';
    const checkboxClass = `${checkboxVariant}${className ? ` ${className}` : ''}`;

    return (
        <div className={`form-check${checkboxClass}`}>
            <input
                className="form-check-input"
                type="checkbox"
                value={checkbox.value}
                id={checkbox.id}
                hidden />
            <label
                className="form-check-label"
                htmlFor={checkbox.id}>
                {checkbox.label}
            </label>
        </div>
    );
};

export default Checkbox;