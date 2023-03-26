import React from 'react';
import type {MainColorProps} from "@/@type/common";

import {MAIN_COLOR} from "@/data/global";

import {Card, Col, Row} from "react-bootstrap";
import LogoHeart from "@/components/common/logo/logoHear/LogoHeart";

type CardBlockItemProps = {
    color: Pick<MainColorProps, 'primary' | 'secondary' | 'tertiary'>
    title: string;
    description: string;
}

export type CardsBlockProps = {
    className?: string;
    option: {
        card: string;
    };
    items: Array<CardBlockItemProps>
};

const CardsBlock = ({className, option, items}: CardsBlockProps): React.ReactElement => (
    <Row className={`cards--block${className ? ` ${className}` : ''}`}>
        {items.map((item: CardBlockItemProps) => (
            <Col
                key={item.title}
                className={option.card}>
                <div className={`cards__card cards__card--${item.color}`}>
                    <LogoHeart color={MAIN_COLOR[item.color as keyof Object]} />
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            </Col>
        ))}
    </Row>
);

export default CardsBlock;