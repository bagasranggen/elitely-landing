import React, {useState} from 'react';

import {MainColorProps} from "@/@type/common";

import {Accordion as BSAccordion} from "react-bootstrap";
import parse from "html-react-parser";
import LogoChevronDown from "@/components/common/logo/logoChevronDown/LogoChevronDown";
import {AccordionEventKey} from "react-bootstrap/AccordionContext";
import {MAIN_COLOR} from "@/data/global";

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

    return (
        <BSAccordion
            className={color ? ` accordion--${color}` : ''}
            onSelect={(eventKey: AccordionEventKey) => isActive(eventKey)}>
            {items.map((item: AccordionItemType, i: number) => (
                <BSAccordion.Item
                    key={i}
                    eventKey={i.toString()}>
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