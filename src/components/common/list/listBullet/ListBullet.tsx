import React from 'react';

import type {MainColorProps} from "@/@type/common";
import type {FadeInDirectionProps, FadeInPositionProps} from "@/components/animation/fade/useFadeIn";

import {createAnimation} from "@/components/animation/helper";

export type ListBulletItemProps = string;

export type ListBulletProps = {
    className?: string;
    options?: {
        color?: MainColorProps;
        weight?: 'normal' | 'bold';
        variant?: 'inline' | 'regular';
        animation?: {
            type?: 'fade-in',
            direction?: FadeInDirectionProps,
            position?: FadeInPositionProps;
        }
    };
    items: ListBulletItemProps[]
};

const ListBullet = ({className, options, items}: ListBulletProps): React.ReactElement => {
    const listColor = options?.color ? ` list-bullet--${options.color}` : '';
    const listVariant = options?.variant ? ` list-bullet--${options.variant}` : '';
    const listWeight = options?.weight ? ` list-bullet--${options.weight}` : ' list-bullet--bold';
    const listClass = `list-unstyled list-inline list-bullet${listWeight}${listVariant}${listColor}${className ? ` ${className}` : ''}`;
    const listAnimation = options?.animation ? createAnimation(options.animation) : {}

    return (
        <ul className={listClass}>
            {items.map((item: ListBulletItemProps, i: number) => (
                <li key={item} {...listAnimation} {...options?.animation?.type && createAnimation({delay: i === 0 ? .15 : ((i + 1) * .15)})}>{item}</li>
            ))}
        </ul>
    )
};

export default ListBullet;