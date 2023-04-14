import type {BreakpointsProps} from "@/@type/common";

export const MAIN_COLOR = {
    primary: '#B2294B',
    secondary: '#E4BC28',
    tertiary: '#32C08D',
    light: '#F5F5F5',
}

export const ANIMATIONS = {
    fadeIn: {
        type: 'fade-in',
        direction: {left: 'left', right: 'right', up: 'up', down: 'down'}
    }
}

export const ANIMATION_ATTRIBUTE = {
    TYPE: 'data-animation',
    DIRECTION: 'data-animation-direction',
    DELAY: 'data-animation-delay',
    POSITION: 'data-animation-position',
}

export const BREAKPOINTS: Record<'MIN' | 'MAX', Record<BreakpointsProps, number>> = {
    MIN: {
        xxl: 1400,
        xl: 1200,
        lg: 992,
        md: 768,
        sm: 576,
        xs: 0,
    },
    MAX: {
        xxl: 1399.98,
        xl: 1199.98,
        lg: 991.98,
        md: 767.98,
        sm: 575.98,
        xs: 0,
    }
}