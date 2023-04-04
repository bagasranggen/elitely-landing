import {AccordionProps} from "@/components/common/accordion/Accordion";
import {PictureItemProps} from "@/components/common/picture/Picture";
import {HeadingOffsetProps} from "@/components/common/heading/headingOffset/HeadingOffset";

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
                title: 'How is my privacy protected?',
                description: `<p>Elitely takes privacy protection very seriously. We will not disclose your personal information to any third party, not even to your date -- without your consent. Likewise, your date is not obligated to share his/her contact details with you.</p>`
            },
            {
                title: 'How is my privacy protected?',
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
                title: 'How is my privacy protected?',
                description: `<p>Elitely takes privacy protection very seriously. We will not disclose your personal information to any third party, not even to your date -- without your consent. Likewise, your date is not obligated to share his/her contact details with you.</p>`
            },
            {
                title: 'How is my privacy protected?',
                description: `<p>Elitely takes privacy protection very seriously. We will not disclose your personal information to any third party, not even to your date -- without your consent. Likewise, your date is not obligated to share his/her contact details with you.</p>`
            },
        ]
    }
}