import {MAIN_COLOR} from "@/data/global";
import {CardBlockListItemProps} from "@/components/common/cards/cardBlockList/CardBlockList";
import {CarouselCardImageProps} from "@/components/common/carousel/carouselCardImage/CarouselCardImage";
import {BarChartProps} from "@/components/common/chart/barChart/BarChart";
import {BreadcrumbProps} from "@/components/common/breadcrumb/Breadcrumb";
import {ListBulletProps} from "@/components/common/list/listBullet/ListBullet";

export const HEADER: { breadcrumb: BreadcrumbProps['items'], list: ListBulletProps["items"] } = {
    breadcrumb: [{url: '/', label: 'Homepage'}, {url: '/how-it-works', label: 'How It Works'}],
    list: ['Unlocking connections', 'Dating on steroids ', 'Connect with your favourite Influencers instantly']
}

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

export const CHARTS: BarChartProps['data'] = {
    labels: ['May', 'June', 'July', 'August', 'September', 'October'],
    datasets: [
        {
            label: 'Subscribe',
            data: [40, 35, 12, 18, 27, 38],
            backgroundColor: MAIN_COLOR.primary,
        }
    ]
}

export const HOW_IT_WORKS: CarouselCardImageProps["items"] = [
    {
        image: {
            src: '/images/how-personality.jpg',
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
            src: '/images/how-influencer.jpg',
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
            src: '/images/how-lurkers.jpg',
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