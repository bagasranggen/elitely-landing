import {CIRCLE} from "@/data/mock/common";

import {AccordionProps} from "@/components/common/accordion/Accordion";
import {PictureItemProps} from "@/components/common/picture/Picture";
import {HeadingOffsetProps} from "@/components/common/heading/headingOffset/HeadingOffset";
import {BreadcrumbProps} from "@/components/common/breadcrumb/Breadcrumb";
import {ListBulletProps} from "@/components/common/list/listBullet/ListBullet";

export const HEADER: { breadcrumb: BreadcrumbProps['items'], list: ListBulletProps["items"], media: Record<'main' | 'bg', PictureItemProps[]> } = {
    breadcrumb: [{url: '/', label: 'Homepage'}, {url: '/faqs', label: 'Frequently Asked Questions'}],
    list: ['Unlocking connections', 'Dating on steroids ', 'Connect with your favourite Influencers instantly'],
    media: {
        main: [
            {
                media: 768,
                src: '/images/faqs.png',
                width: 423,
                height: 343,
                alt: 'faq'
            },
            {
                src: '/images/faqs-sm.png',
                width: 318,
                height: 258,
                alt: 'faq'
            },
        ],
        bg: CIRCLE,
    }
}

export const FAQS: Record<'GENERAL' | 'LURKERS' | 'INFLUENCER' | string, ({ title: HeadingOffsetProps['children'], image?: PictureItemProps[] } & AccordionProps)> = {
    GENERAL: {
        title: 'General',
        image: [{
            src: '/images/heading-line-general.svg',
            width: 143,
            height: 7,
            alt: 'general line'
        }],
        color: 'tertiary',
        items: [
            {
                title: 'How is my privacy protected?',
                description: `<p>Elitely takes privacy protection very seriously. We will not disclose your personal information to any third party, not even to your date -- without your consent. Likewise, your date is not obligated to share his/her contact details with you.</p>`
            },
            {
                title: 'How is my privacy protected?',
                description: `<p>Elitely takes privacy protection very seriously. We will not disclose your personal information to any third party, not even to your date -- without your consent. Likewise, your date is not obligated to share his/her contact details with you.</p>`
            },
        ]
    },
    LURKERS: {
        title: 'For Lurkers',
        color: 'primary',
        image: [{
            src: '/images/heading-line-lurkers.svg',
            width: 215,
            height: 7,
            alt: 'general line'
        }],
        items: [
            {
                title: 'How do I unlock a chat with a Personality/Influencer?',
                description: `<p>Elitely takes privacy protection very seriously. We will not disclose your personal information to any third party, not even to your date -- without your consent. Likewise, your date is not obligated to share his/her contact details with you.</p>`
            },
            {
                title: 'How do I unlock a chat with a Personality/Influencer?',
                description: `<p>Elitely takes privacy protection very seriously. We will not disclose your personal information to any third party, not even to your date -- without your consent. Likewise, your date is not obligated to share his/her contact details with you.</p>`
            },
            {
                title: 'Why do some Personalities/Influencers not have the chat or the meet buttons?',
                description: `<p>Elitely takes privacy protection very seriously. We will not disclose your personal information to any third party, not even to your date -- without your consent. Likewise, your date is not obligated to share his/her contact details with you.</p>`
            },
            {
                title: 'Why do some Personalities/Influencers have their chat or meet buttons greyed out?',
                description: `<p>Elitely takes privacy protection very seriously. We will not disclose your personal information to any third party, not even to your date -- without your consent. Likewise, your date is not obligated to share his/her contact details with you.</p>`
            },
            {
                title: 'Why do some Personalities/Influencers have their chat or meet buttons greyed out?',
                description: `<p>Elitely takes privacy protection very seriously. We will not disclose your personal information to any third party, not even to your date -- without your consent. Likewise, your date is not obligated to share his/her contact details with you.</p>`
            },
            {
                title: 'I’m on a meetup, can I exchange contact numbers with my date?',
                description: `<p>Elitely takes privacy protection very seriously. We will not disclose your personal information to any third party, not even to your date -- without your consent. Likewise, your date is not obligated to share his/her contact details with you.</p>`
            },
            {
                title: 'I’m a Lurker and my date is late. Can I get a refund?',
                description: `<p>Elitely takes privacy protection very seriously. We will not disclose your personal information to any third party, not even to your date -- without your consent. Likewise, your date is not obligated to share his/her contact details with you.</p>`
            },
            {
                title: 'Can I make a booking for a Personality/Influencer and invite my friends for the meetup?',
                description: `<p>Elitely takes privacy protection very seriously. We will not disclose your personal information to any third party, not even to your date -- without your consent. Likewise, your date is not obligated to share his/her contact details with you.</p>`
            },
            {
                title: 'Can I make a booking for more than 1 Personality/Influencers in the same time slot?',
                description: `<p>Elitely takes privacy protection very seriously. We will not disclose your personal information to any third party, not even to your date -- without your consent. Likewise, your date is not obligated to share his/her contact details with you.</p>`
            },
            {
                title: 'How do I make payment for a meetup?',
                description: `<p>Elitely takes privacy protection very seriously. We will not disclose your personal information to any third party, not even to your date -- without your consent. Likewise, your date is not obligated to share his/her contact details with you.</p>`
            },
            {
                title: 'How do I make payment for a chat?',
                description: `<p>Elitely takes privacy protection very seriously. We will not disclose your personal information to any third party, not even to your date -- without your consent. Likewise, your date is not obligated to share his/her contact details with you.</p>`
            },
        ]
    },
    INFLUENCER: {
        title: 'For Personalities/Influencers',
        color: 'secondary',
        image: [{
            src: '/images/heading-line-influencers.svg',
            width: 520,
            height: 7,
            alt: 'general line'
        }],
        items: [
            {
                title: 'How do I unlock a chat with a Personality/Influencer?',
                description: `<p>Elitely takes privacy protection very seriously. We will not disclose your personal information to any third party, not even to your date -- without your consent. Likewise, your date is not obligated to share his/her contact details with you.</p>`
            },
            {
                title: 'How do I unlock a chat with a Personality/Influencer?',
                description: `<p>Elitely takes privacy protection very seriously. We will not disclose your personal information to any third party, not even to your date -- without your consent. Likewise, your date is not obligated to share his/her contact details with you.</p>`
            },
        ]
    }
}