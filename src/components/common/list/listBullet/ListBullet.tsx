import React from 'react';

import type {MainColorProps} from "@/@type/common";

export type ListBulletItemProps = string;

export type ListBulletProps = {
    className?: string;
    options?: {
        color?: MainColorProps;
        variant?: 'inline' | 'regular';
    };
    items: ListBulletItemProps[]
};

const ListBullet = ({className, options, items}: ListBulletProps): React.ReactElement => {
    const listColor = options?.color ? ` list-bullet--${options.color}` : '';
    const listVariant = options?.variant ? ` list-bullet--${options.variant}` : ''
    const listClass = `list-unstyled list-inline list-bullet${listVariant}${listColor}${className ? ` ${className}` : ''}`

    return (
        <ul className={listClass}>
            {items.map((item: ListBulletItemProps) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    )
};

export default ListBullet;