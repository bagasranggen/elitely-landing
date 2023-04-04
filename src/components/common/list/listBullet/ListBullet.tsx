import React from 'react';

export type ListBulletItemProps = string;

export type ListBulletProps = {
    className?: string;
    items: ListBulletItemProps[]
};

const ListBullet = ({className, items}: ListBulletProps): React.ReactElement => (
    <ul className={`list-unstyled list-bullet${className ? ` ${className}` : ''}`}>
        {items.map((item: ListBulletItemProps) => (
            <li key={item}>{item}</li>
        ))}
    </ul>
);

export default ListBullet;