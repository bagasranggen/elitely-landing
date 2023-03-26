import React from 'react';

export type LogoHeartProps = {
    color: any;
};

const LogoHeart = ({color}: LogoHeartProps): React.ReactElement => (
    <svg
        width="93"
        height="86"
        viewBox="0 0 93 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M46.3115 7.11346C57.189 -2.6985 73.9983 -2.37283 84.4776 8.17422C94.9522 18.7259 95.3134 35.5305 85.5704 46.4916L46.3022 86L7.0433 46.4916C-2.69966 35.5305 -2.33384 18.698 8.13614 8.17422C18.6246 -2.35887 35.4016 -2.71246 46.3115 7.11346Z"
            fill={color ?? '#ffffff'} />
    </svg>

);

export default LogoHeart;