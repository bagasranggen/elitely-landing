import {ANIMATION_ATTRIBUTE} from "@/data/global";

import {FadeInProps} from "@/components/animation/fade/useFadeIn";

export const createAnimation = (options: FadeInProps["options"]) => ({
    ...options?.type ? {[ANIMATION_ATTRIBUTE.TYPE]: options.type} : {},
    ...options?.direction ? {[ANIMATION_ATTRIBUTE.DIRECTION]: options.direction} : {},
    ...options?.delay ? {[ANIMATION_ATTRIBUTE.DELAY]: options.delay} : {},
    ...options?.position ? {[ANIMATION_ATTRIBUTE.POSITION]: options.position} : {},
})