import {useEffect, useLayoutEffect} from "react";
import {useRouter} from "next/router";

import {FADE_IN_DIRECTION} from "@/components/animation/fade/direction";

import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export type FadeInDirectionProps = 'left' | 'right' | 'up' | 'down';
export type FadeInDirectionItemProps = {
    direction: 'x' | 'y';
    x?: number;
    y?: number;
}
export type FadeInPositionProps = 'top' | 'center';

const useFadeIn = () => {
    const router = useRouter();

    const createFadeIn: any = () => {
        return gsap.utils.toArray('[data-animation="fade-in"]').forEach((fade: any) => {
            const dir: FadeInDirectionProps = fade?.getAttribute('data-animation-direction');
            const delay: number | undefined = fade?.getAttribute('data-animation-delay') ? parseFloat(fade?.getAttribute('data-animation-delay')) : undefined;
            const isOnTop = fade?.getAttribute('data-animation-position') === 'top';

            gsap.timeline({
                scrollTrigger: {
                    trigger: fade,
                    start: `top ${isOnTop ? 'bottom' : '80%'}`,
                    // markers: true
                    markers: process.env.NEXT_PUBLIC_GSAP_MARKER === '1'
                },
                // duration: .5,
                // ease: 'power2'
                ease: 'Power1.easeIn',
                ...delay ? {duration: delay} : {}
            }).fromTo(fade, {
                opacity: 0,
                ...dir ? {[FADE_IN_DIRECTION[dir].direction]: FADE_IN_DIRECTION[dir][FADE_IN_DIRECTION[dir].direction]} : {}
            }, {
                opacity: 1,
                ...dir ? {[FADE_IN_DIRECTION[dir].direction]: 0} : {}
            })
        })
    }

    useLayoutEffect(() => {
        const context = gsap.context(() => createFadeIn);

        return () => context.revert();
    }, [])

    useLayoutEffect(() => {
        const handleStart = () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        const handleEnd = () => createFadeIn()

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