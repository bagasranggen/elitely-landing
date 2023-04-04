import React from 'react';

import {Col, Row} from "react-bootstrap";
import Card, {CardLoveProps, CardProps} from "@/components/common/cards/card/Card";

export type CardsBlockProps = {
    className?: string;
    option: {
        card: string;
    };
    items: Array<Pick<CardProps, "color"> & CardLoveProps>
};

const CardsBlock = ({className, option, items}: CardsBlockProps): React.ReactElement => (
    <Row className={`cards--block${className ? ` ${className}` : ''}`}>
        {items.map((item: Pick<CardProps, "color"> & CardLoveProps) => (
            <Col
                key={item.title}
                className={option.card}>
                <Card
                    color={item.color}
                    title={item.title}
                    description={item.description} />
            </Col>
        ))}
    </Row>
);

export default CardsBlock;