import hMember from '../../assets/images/highlight-member.svg';
import hUser from '../../assets/images/highlight-user.svg'
import hMan from '../../assets/images/highlight-man.svg'
import hWoman from '../../assets/images/highlight-woman.svg'

export const CARDS = [
    {
        color: 'primary',
        title: 'Inclusivity & Diversity',
        description: 'All our Personalities and Influencers have been verified, so you can be sure you are speaking to or meeting a real person. Schedule meets easily and on-demand with our easy Meet Scheduler.',
    },
    {
        color: 'secondary',
        title: 'Inclusivity & Diversity',
        description: 'All our Personalities and Influencers have been verified, so you can be sure you are speaking to or meeting a real person. Schedule meets easily and on-demand with our easy Meet Scheduler.',
    },
    {
        color: 'tertiary',
        title: 'Inclusivity & Diversity',
        description: 'All our Personalities and Influencers have been verified, so you can be sure you are speaking to or meeting a real person. Schedule meets easily and on-demand with our easy Meet Scheduler.',
    },
]

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
]

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
]