import React, {useEffect} from "react";
import {useRouter} from "next/router";

import {FADE_IN_DIRECTION} from "@/components/animation/fade/direction";

import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import {createAnimation} from "@/components/animation/helper";

gsap.registerPlugin(ScrollTrigger);

export type FadeInProps = {
    className?: string;
    options?: {
        type?: 'fade-in',
        direction?: FadeInDirectionProps;
        position?: FadeInPositionProps;
        delay?: FadeInDelayProps;
    }
    children?: React.ReactNode;
}

export const FadeIn = ({className, options, children}: FadeInProps): React.ReactElement => (
    <div
        className={className}
        {...createAnimation(options)}>
        {children}
    </div>
)

export type FadeInDirectionProps = 'left' | 'right' | 'up' | 'down';
export type FadeInDirectionItemProps = {
    direction: 'x' | 'y';
    x?: number;
    y?: number;
}
export type FadeInPositionProps = 'top' | 'center';
export type FadeInDelayProps = number;

const useFadeIn = () => {
    const router = useRouter();

    const createFadeIn: any = () => {
        return gsap.utils.toArray('[data-animation="fade-in"]').forEach((fade: any) => {
            const dir: FadeInDirectionProps = fade?.getAttribute('data-animation-direction');
            const delay: FadeInDelayProps | undefined = fade?.getAttribute('data-animation-delay') ? parseFloat(fade?.getAttribute('data-animation-delay')) : undefined;
            const isOnTop = fade?.getAttribute('data-animation-position') === 'top';

            gsap.timeline({
                scrollTrigger: {
                    trigger: fade,
                    start: `top ${isOnTop ? 'bottom' : '80%'}`,
                    markers: process.env.NEXT_PUBLIC_GSAP_MARKER === '1' && process.env.NODE_ENV === 'development'
                },
                ease: 'Power1.easeIn',
                ...delay ? {duration: delay} : {},
                onComplete: () => {
                    gsap.set(fade, {clearProps: true})
                }
            }).fromTo(fade, {
                opacity: 0,
                ...dir ? {[FADE_IN_DIRECTION[dir].direction]: FADE_IN_DIRECTION[dir][FADE_IN_DIRECTION[dir].direction]} : {}
            }, {
                opacity: 1,
                ...dir ? {[FADE_IN_DIRECTION[dir].direction]: 0} : {},
                duration: .85
            })
        })
    }

    useEffect(() => {
        const context = gsap.context(() => createFadeIn);

        return () => context.revert();
    }, [])

    useEffect(() => {
        const handleStart = () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
        const handleEnd = () => {
            ScrollTrigger.refresh(true);
            createFadeIn()
        }

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleEnd);
        router.events.on("routeChangeError", handleEnd);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleEnd);
            router.events.off("routeChangeError", handleEnd);
        };
    }, [router.events]);
}

export default useFadeIn;