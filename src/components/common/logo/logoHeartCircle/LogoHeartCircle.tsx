import React from 'react';

import type {MainColorProps} from "@/@type/common";
import {MAIN_COLOR} from "@/data/global";

export type LogoHeartCircleProps = {
    color?: MainColorProps;
};

const LogoHeartCircle = ({color}: LogoHeartCircleProps): React.ReactElement => (
    <div className={`heart-wrapper${color ? ` heart-wrapper--${color}` : ''}`}>
        <svg
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13.0152 1.98515C9.96535 -0.75307 5.25234 -0.662185 2.31417 2.28118C-0.622702 5.22584 -0.723972 9.91548 2.00776 12.9744L13.0178 24L24.0252 12.9744C26.7569 9.91548 26.6544 5.21805 23.7188 2.28118C20.778 -0.65829 16.0741 -0.756965 13.0152 1.98515Z"
                fill={color ? MAIN_COLOR[color] : '#ffffff'} />
        </svg>
    </div>

);

export default LogoHeartCircle;