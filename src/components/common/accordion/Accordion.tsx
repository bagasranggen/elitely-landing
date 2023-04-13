import React, {useState} from 'react';

import {MAIN_COLOR} from "@/data/global";

import type {MainColorProps} from "@/@type/common";
import type {AccordionEventKey} from "react-bootstrap/AccordionContext";
import type {FadeInProps} from "@/components/animation/fade/useFadeIn";

import {createAnimation} from "@/components/animation/helper";
import parse from "html-react-parser";

import {Accordion as BSAccordion} from "react-bootstrap";
import LogoChevronDown from "@/components/common/logo/logoChevronDown/LogoChevronDown";

export type AccordionItemType = {
    title: string;
    description: string;
}

export type AccordionProps = {
    color: MainColorProps;
    items: AccordionItemType[]
};

const Accordion = ({color, items}: AccordionProps): React.ReactElement => {
    const [active, isActive] = useState<AccordionEventKey | undefined>();
    const animation: FadeInProps = createAnimation({type: 'fade-in', direction: 'up'});

    return (
        <BSAccordion
            className={color ? ` accordion--${color}` : ''}
            onSelect={(eventKey: AccordionEventKey) => isActive(eventKey)}>
            {items.map((item: AccordionItemType, i: number) => (
                <BSAccordion.Item
                    key={i}
                    eventKey={i.toString()}
                    {...animation}>
                    <BSAccordion.Header>
                        {item.title}
                        <LogoChevronDown {...active === i.toString() && {color: MAIN_COLOR[color]}} />
                    </BSAccordion.Header>
                    <BSAccordion.Body>{parse(item.description)}</BSAccordion.Body>
                </BSAccordion.Item>
            ))}
        </BSAccordion>
    )
};

export default Accordion;