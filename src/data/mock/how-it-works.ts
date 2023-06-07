import { MAIN_COLOR } from "@/data/global";
import { CIRCLE } from "@/data/mock/common";

import { CardBlockListItemProps } from "@/components/common/cards/cardBlockList/CardBlockList";
import { CarouselCardImageProps } from "@/components/common/carousel/carouselCardImage/CarouselCardImage";
import { BarChartProps } from "@/components/common/chart/barChart/BarChart";
import { BreadcrumbProps } from "@/components/common/breadcrumb/Breadcrumb";
import { ListBulletProps } from "@/components/common/list/listBullet/ListBullet";
import { PictureItemProps } from "@/components/common/picture/Picture";

export const HEADER: {
    breadcrumb: BreadcrumbProps['items'],
    list: ListBulletProps["items"],
    media: Record<'main' | 'bg', PictureItemProps[]>
} = {
    breadcrumb: [ { url: '/', label: 'Homepage' }, { url: '/how-it-works', label: 'How It Works' } ],
    list: [ 'Unlocking connections', 'Dating on steroids ', 'Connect with your favourite Influencers instantly' ],
    media: {
        main: [
            {
                media: 768,
                src: '/images/how-man.png',
                width: 420,
                height: 536,
                alt: 'man'
            },
            {
                src: '/images/how-man-sm.png',
                width: 316,
                height: 413,
                alt: 'man'
            },
        ],
        bg: CIRCLE,
    },
};

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
];

export const CHARTS: BarChartProps['data'] = {
    labels: [ 'May', 'June', 'July', 'August', 'September', 'October' ],
    datasets: [
        {
            label: 'Subscribe',
            data: [ 40, 35, 12, 18, 27, 38 ],
            backgroundColor: MAIN_COLOR.primary,
        }
    ]
};

export const PAYMENT = [
    {
        media: [
            {
                media: 0,
                src: '/images/how/payment-unlock.svg',
                width: 176,
                height: 159,
            }
        ],
        description: `<p>Unlock services with our Influencers or Personalities on our site.</p>`,
        image: [
            {
                media: 0,
                src: '/images/how/payment-method.svg',
                width: 328,
                height: 15,
            }
        ],
        detail: {
            title: `<span class="fc--primary">Lurkers</span>`,
            subTitle: `<p>You are the client who commence the payment events by linking a payment method and unlocking a service with us</p>`
        }
    },
    {
        media: [
            {
                media: 0,
                src: '/images/how/payment-earning.svg',
                width: 176,
                height: 159,
            }
        ],
        description: `<p>Earning will be credited into Earning Balance 7-10 days after service is completed.</p><p>Service commission – 25%</p>`,
        detail: {
            title: `<span class="fc--secondary">Influencers</span><br/><span class="fc--tertiary">Personalities</span>`,
            subTitle: `<p>You pay a commission to Elitely, taken as a percentage of the service fee</p>`
        }
    },
    {
        media: [
            {
                media: 0,
                src: '/images/how/payment-withdraw.svg',
                width: 176,
                height: 159,
            }
        ],
        description: `<p>Earnings will then be reflected on your Wise Account which is linked to your personal bank accounts for withdrawals.</p>`,
        detail: {
            title: [
                {
                    media: 0,
                    src: '/images/how/logo-primary.svg',
                    width: 241,
                    height: 92,
                }
            ],
            subTitle: `<p>We are the intermediary handling the exchange of services and payments, making us the merchant</p>`
        }
    },
];

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
];