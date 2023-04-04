import React from 'react';

import {Breadcrumb as BSBreadcrumb} from "react-bootstrap";

export type BreadcrumbItemProps = {
    url: string;
    label: string
}

export type BreadcrumbProps = {
    items: BreadcrumbItemProps[]
};

const Breadcrumb = ({items}: BreadcrumbProps): React.ReactElement => (
    <BSBreadcrumb>
        {items.map((item: BreadcrumbItemProps, i: number) => (
            <BSBreadcrumb.Item
                key={item.label}
                active={i === items.length - 1}
                href={item.url}>{item.label}</BSBreadcrumb.Item>
        ))}
    </BSBreadcrumb>
);

export default Breadcrumb;