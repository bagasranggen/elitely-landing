import React from 'react';

import parse from 'html-react-parser'
import {createAnimation} from "@/components/animation/helper";

import {Col, Row} from "react-bootstrap";
import Button, {ButtonContainer, ButtonProps} from "@/components/common/button/Button";
import Picture, {PictureProps} from "@/components/common/picture/Picture";

type CardsAlternateItemProps = {
    images: PictureProps;
    title: React.ReactNode;
    description: string;
    button?: ButtonProps;
}

export type CardsAlternateProps = {
    className?: string;
    items: Array<CardsAlternateItemProps>
};

const CardsAlternate = ({className, items}: CardsAlternateProps): React.ReactElement => (
    <>
        {items.map((item: any, i: number) => (
            <Row
                key={item.title}
                className={`${i % 2 === 0 ? '' : 'flex-md-row-reverse '}justify-content-between align-items-center gy-5 cards--alternate${className ? ` ${className}` : ''}`}
                {...createAnimation({type: "fade-in", direction: i % 2 === 0 ? 'left' : 'right'})}>
                <Col
                    md={5}
                    lg={6}>
                    {item?.images?.length > 0 && <Picture images={item.images} />}
                </Col>
                <Col
                    md={6}
                    lg={5}>
                    <h2>{parse(item.title)}</h2>
                    {parse(item.description)}
                    {item.button.href && <ButtonContainer className='mt-4'>
                        <Button
                            option={{variant: 'block', color: item.button.color, size: 'lg'}}
                            link={{href: item.button.href, label: item.button.label}} />
                    </ButtonContainer>}
                </Col>
            </Row>
        ))}
    </>
)

export default CardsAlternate;