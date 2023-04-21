import React, {useEffect, useState} from 'react';

import type {InputProps} from "@/components/common/input/Input";

import {Dropdown} from "react-bootstrap";
import LogoChevronDown from "@/components/common/logo/logoChevronDown/LogoChevronDown";

export type InputSelectItemProps = {
    value: string;
    label: string;
}

export type InputSelectProps = {
    input: {
        id: InputProps["input"]["id"];
        placeholder?: InputProps["input"]["label"];
        options?: InputSelectItemProps[];
    };
    events?: {
        onChange?: (value: string) => void;
    }
};

const InputSelect = ({input, events}: InputSelectProps): React.ReactElement => {
    const [value, setValue] = useState<InputSelectItemProps>({value: '', label: ''});

    useEffect(() => {
        if (!value) return;

        events?.onChange && events.onChange(value.value)
    }, [value, events])

    return (
        <div className="form--regular form--dropdown">
            <input
                id={input.id}
                title={input.id}
                type="text"
                defaultValue={value?.value}
                hidden />
            <Dropdown>
                <Dropdown.Toggle
                    variant='outline'
                    className={value?.value === '' ? 'dropdown-toggle--is-empty' : ''}>
                    {(value?.label && value?.label !== '') ? value.label : (input?.placeholder ?? 'Please select one..')}
                    <LogoChevronDown />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {input.options?.map((option: InputSelectItemProps) => (
                        <Dropdown.Item
                            key={option.value}
                            onClick={() => setValue(option)}>{option.label}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default InputSelect;