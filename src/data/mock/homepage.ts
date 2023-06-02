import hMember from '../../assets/images/highlight-member.svg';
import hUser from '../../assets/images/highlight-user.svg';
import hMan from '../../assets/images/highlight-man.svg';
import hWoman from '../../assets/images/highlight-woman.svg';

export const CAROUSEL = [
    {
        variant: 'connection',
        color: 'primary',
        title: 'The fastest way to',
        titleBlock: 'Unlock Connections',
        description: '<p>The world’s first social media platform where users can pay a small fee to unlock chats and meets ups with other users on our platform, who have been qualified as interesting Personalities or Influencers. </p>',
        media: {
            main: [
                {
                    media: 768,
                    src: '/images/banner-connect.png',
                    width: 355,
                    height: 602,
                    alt: 'man'
                },
                {
                    src: '/images/banner-connect-sm.png',
                    width: 267,
                    height: 452,
                    alt: 'man'
                },
            ]
        },
        options: {
            columns: {
                first: 'offset-lg-4',
                second: 'offset-md-1 offset-lg-6 offset-xl-8'
            },
            columnsSize: {
                first: {},
                second: {
                    md: 10,
                    lg: 5,
                    xl: 4,
                }
            }
        }
    },
    {
        variant: 'skip',
        color: 'primary',
        title: 'Dating on Steroids',
        titleBlock: 'Skip the swipe',
        description: '<p>The world’s first social media platform where users can pay a small fee to unlock chats and meets ups with other users on our platform, who have been qualified as interesting Personalities or Influencers. </p>',
        media: {
            main: [
                {
                    media: 768,
                    src: '/images/banner-skip.png',
                    width: 1013,
                    height: 452,
                    alt: 'man'
                },
                {
                    src: '/images/banner-skip-sm.png',
                    width: 761,
                    height: 340,
                    alt: 'man'
                },
            ]
        },
        options: {
            columns: {
                first: 'offset-lg-4',
                second: 'offset-md-1 offset-lg-8 offset-xl-7'
            },
            columnsSize: {
                first: {},
                second: {
                    md: 10,
                    lg: 4,
                }
            }
        }
    },
    {
        variant: 'influencer',
        color: 'secondary',
        title: 'Meet and Chat with',
        titleBlock: 'Influencers',
        description: '<p>The world’s first social media platform where users can pay a small fee to unlock chats and meets ups with other users on our platform, who have been qualified as interesting Personalities or Influencers.</p>',
        media: {
            main: [
                {
                    media: 768,
                    src: '/images/banner-influencer.png',
                    width: 779,
                    height: 648,
                    alt: 'man'
                },
                {
                    src: '/images/banner-influencer-sm.png',
                    width: 585,
                    height: 486,
                    alt: 'man'
                },
            ]
        },
        options: {
            columns: {
                first: 'offset-lg-6 offset-xxl-7',
                second: 'offset-md-1 offset-lg-6 offset-xxl-7'
            },
            columnsSize: {
                first: {},
                second: {
                    md: 10,
                    lg: 5,
                }
            }
        }
    },
    {
        variant: 'personalities',
        color: 'tertiary',
        title: 'Meet and Chat with',
        titleBlock: 'Personalities',
        description: '<p>The world’s first social media platform where users can pay a small fee to unlock chats and meets ups with other users on our platform, who have been qualified as interesting Personalities or Influencers.</p>',
        media: {
            main: [
                {
                    media: 768,
                    src: '/images/banner-personalities.png',
                    width: 810,
                    height: 577,
                    alt: 'man'
                },
                {
                    src: '/images/banner-personalities-sm.png',
                    width: 608,
                    height: 433,
                    alt: 'man'
                },
            ]
        },
        options: {
            columns: {
                first: '',
                second: 'offset-md-1 ms-lg-0'
            },
            columnsSize: {
                first: {
                    lg: 8
                },
                second: {
                    md: 10,
                    lg: 5,
                }
            }
        }
    },
];

export const CARDS = [
    {
        color: 'primary',
        title: 'Anti Catfish Policy',
        description: 'All our Personalities and Influencers have been verified, so you can be sure you are speaking to or meeting a real person. Schedule meets easily and on-demand with our easy Meet Scheduler.',
    },
    {
        color: 'secondary',
        title: 'Meet & Chat',
        description: 'We also facilitate meet ups and chats between Influencers and their most genuine fans. There are many platforms used by Influencers but none that are meant for close-range interaction.',
    },
    {
        color: 'tertiary',
        title: 'Inclusivity & Diversity',
        description: 'As a platform that rejects social norms (for the sake of them) and classism, we welcome people who identify with all genders, who have been qualified as interesting Personalities or Influencers.',
    },
];

export const HIGHLIGHT = [
    {
        image: {
            src: hMember,
            alt: 'member icon'
        },
        title: '100K+',
        description: 'Members in total'
    },
    {
        image: {
            src: hUser,
            alt: 'member icon'
        },
        title: '100K+',
        description: 'Members online'
    },
    {
        image: {
            src: hMan,
            alt: 'member icon'
        },
        title: '100K+',
        description: 'Man online'
    },
    {
        image: {
            src: hWoman,
            alt: 'member icon'
        },
        title: '100K+',
        description: 'Woman online'
    },
];

export const ALTERNATE: any = [
    {
        images: [
            {
                media: 992,
                src: '/images/alternate-influencer.png',
                width: 612,
                height: 575,
                alt: ''
            },
            {
                src: '/images/alternate-influencer-sm.png',
                width: 459,
                height: 432,
                alt: ''
            }
        ],
        title: 'Join our community and meet our <span class="fc--secondary">Influencers</span>',
        description: '<p>For Influencers, Elitely is a medium for encouraging interaction between them and their genuine fans.</p><p>While they have their fair share of adoring fans, the haters spoil the game. Many end up ignoring fan messages.<p/><p>Elitely brings the power back to them by filtering out the haters with a paywall and smart language processing. Chat safely and meet your genuine fans, while making a living out of providing quality content and fan service!</p>',
        button: {
            color: 'secondary',
            href: '/',
            label: 'Know More'
        }
    },
    {
        images: [
            {
                media: 992,
                src: '/images/alternate-personalities.png',
                width: 611,
                height: 574,
                alt: ''
            },
            {
                src: '/images/alternate-personalities-sm.png',
                width: 459,
                height: 431,
                alt: ''
            }
        ],
        title: 'Join our community and meet our <span class="fc--tertiary">Personalities</span>',
        description: '<p>Elitely is a way to get paid for simply getting to know others!</p><p>These may be new faces or familiar faces, and may be missed connections in the hustle and bustle of today’s real and online world.<p/><p>Be it through virtual chats or in-person meet-ups, they get an incentive to come out of their shells and reconnect with real people.</p>',
        button: {
            color: 'tertiary',
            href: '/',
            label: 'Know More'
        }
    },
    {
        images: [
            {
                media: 992,
                src: '/images/alternate-lurkers.png',
                width: 600,
                height: 558,
                alt: ''
            },
            {
                src: '/images/alternate-lurkers-sm.png',
                width: 459,
                height: 432,
                alt: ''
            }
        ],
        title: 'Join our community and meet our <span class="fc--primary">Lurkers</span>',
        description: '<p>Most social media users “Lurk” but don’t engage with other users, no matter how great the curiosity. We call them “Lurkers”.</p><p>Elitely is a way for  them to bypass the difficulties of getting connected to anyone listed on our platform. A missed connection on a dating app? That person you were too shy to ask out on conventional social platforms? That elusive Influencer that you wish to meet or chat with?<p/><p>At Elitely, anyone can unlock any of the above connections. The other party has an incentive to accept the connection and expand on the interaction, and the rest is up to chemistry...</p>',
        button: {
            color: 'primary',
            href: '/',
            label: 'Know More'
        }
    },
];