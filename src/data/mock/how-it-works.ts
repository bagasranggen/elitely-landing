import {CardBlockListItemProps} from "@/components/common/cards/cardBlockList/CardBlockList";
import {
    CarouselCardImageItemProps,
    CarouselCardImageProps
} from "@/components/common/carousel/carouselCardImage/CarouselCardImage";

export const CARDS: CardBlockListItemProps[] = [
    {
        title: 'Chats',
        color: 'secondary',
        list: [
            'The Tinder cheat code you never knew you needed...yet',
            'Or a way to start a conversation with the most in-demand Influencers',
            'Unlock chat for 30 days',
            'Get a response, or money back guaranteed',
            'Profile verification to ensure no catfishing',
            'Read reviews from other users before unlocking chat',
        ]
    },
    {
        title: 'Meets',
        color: 'secondary',
        list: [
            'Strictly platonic meets aimed at making unlikely connections happen',
            'Schedule a meetup in advance, or on demand',
            'Reschedule the meet at no charge for up to 48h before the meet',
            'Profile verification to ensure no catfishing',
            'Read reviews from other users before unlocking chat',
        ]
    },
]

export const HOW_IT_WORKS: CarouselCardImageProps["items"] = [
    {
        image: {
            src: 'https://picsum.photos/id/237/387/230',
            width: 0,
            height: 0,
            alt: ''
        },
        title: 'Personality',
        color: 'tertiary',
        list: [
            'List your profile for chats and/or meets behind a paywall',
            'Get paid while getting to know others',
            '25% platform commission'
        ]

    },
    {
        image: {
            src: 'https://picsum.photos/id/237/387/230',
            width: 0,
            height: 0,
            alt: ''
        },
        title: 'Influencers',
        color: 'secondary',
        list: [
            'List your profile for chats and/or meets behind a paywall',
            'Get paid while interacting with fans',
            'Get paid while introducing new Personalities and Influencers to our platform**',
            '25% platform commission'
        ]
    },
    {
        image: {
            src: 'https://picsum.photos/id/237/387/230',
            width: 0,
            height: 0,
            alt: ''
        },
        title: 'Lurkers',
        color: 'primary',
        list: [
            'Unlock chats and meets with interesting Personalities/your favourite Influencers',
            'Bypass the hassle of swiping on apps and the ceremonial small talk before meet',
            'Interact directly with your favourite Influencers',
            'Browse profiles of Personalities and Influencers'
        ]
    },
]