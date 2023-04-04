import React from 'react';

import {Col, Row} from "react-bootstrap";
import Card, {CardListProps, CardProps} from "@/components/common/cards/card/Card";
import Picture from "@/components/common/picture/Picture";

export type CardBlockListItemProps = {
    title: string;
    list: CardListProps["list"]
} & Pick<CardProps, "color">;

export type CardBlockListProps = {
    className?: string;
    option: {
        card: string;
    };
    items: CardBlockListItemProps[]
};

const CardBlockList = ({className, option, items}: CardBlockListProps): React.ReactElement => (
    <Row className={`cards--block-list${className ? ` ${className}` : ''}`}>
        {items.map((item: CardBlockListItemProps) => (
            <Col
                key={item.title}
                className={option.card}>
                <h2>
                    <Picture images={[{src: '/images/star.svg', width: 36, height: 34, alt: ''}]} />
                    {item.title}
                </h2>
                <Card
                    color={item.color}
                    list={item.list} />
            </Col>
        ))}
    </Row>
);

export default CardBlockList;