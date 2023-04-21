import React from 'react';

import type {MainColorProps} from "@/@type/common";

import ListCheck, {ListCheckProps} from "@/components/common/list/listCheck/ListCheck";

export type CardLoveProps = {
    title: string;
    description: string;
    list?: never;
}

export type CardListProps = {
    title?: never;
    description?: never;
    list: ListCheckProps["items"];
}

export type CardProps = {
    color: MainColorProps
} & ((CardLoveProps | CardListProps));

const Card = ({color, title, description, list}: CardProps): React.ReactElement => {
    let content: JSX.Element = <></>;
    let type: 'list' | 'love' | undefined;

    if (list?.length && list?.length > 0) {
        type = 'list';
        content = <ListCheck items={list} />;
    }

    if (!list) {
        type = 'love';
        content = <>
            <h2>{title}</h2>
            <p>{description}</p>
        </>
    }

    return <div className={`cards__card cards__card--${color}${type ? ` cards__card--${type}` : ''}`}>{content}</div>;
};

export default Card;