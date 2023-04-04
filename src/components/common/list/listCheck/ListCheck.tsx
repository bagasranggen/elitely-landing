import React from 'react';

export type ListCheckItemProps = string;

export type ListCheckProps = {
    items: ListCheckItemProps[];
};

const ListCheck = ({items}: ListCheckProps): React.ReactElement => (
    <ul className='list-unstyled list-check'>
        {items.map((item: ListCheckItemProps) => (
            <li key={item}>{item}</li>
        ))}
    </ul>
);

export default ListCheck;