import React from 'react';

export type ListDashedItem = string

export type ListDashedProps = {
    items: ListDashedItem[];
};

const ListDashed = ({items}: ListDashedProps): React.ReactElement => (
    <ul className='list-unstyled list-dashed'>
        {items.map((item: ListDashedItem) => (
            <li key={item}>{item}</li>
        ))}
    </ul>
);

export default ListDashed;