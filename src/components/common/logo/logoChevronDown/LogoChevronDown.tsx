import React from 'react';

export type LogoChevronDownProps = {
    color?: string;
};

const LogoChevronDown = ({color}: LogoChevronDownProps): React.ReactElement => (
    <svg
        width="16"
        height="10"
        viewBox="0 0 16 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.99999 9.56015C7.71323 9.56015 7.42652 9.45066 7.2079 9.23214L0.328257 2.35243C-0.109378 1.9148 -0.109378 1.20525 0.328257 0.767791C0.765715 0.330333 1.47512 0.330333 1.91279 0.767791L7.99999 6.85534L14.0872 0.768003C14.5248 0.330545 15.2342 0.330545 15.6716 0.768003C16.1095 1.20546 16.1095 1.91501 15.6716 2.35265L8.79208 9.23236C8.57335 9.45091 8.28663 9.56015 7.99999 9.56015Z"
            fill={color ?? '#2D2D2D'} />
    </svg>
);

export default LogoChevronDown;