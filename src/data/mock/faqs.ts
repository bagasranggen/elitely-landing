import {AccordionProps} from "@/components/common/accordion/Accordion";

export const FAQS: Record<'GENERAL' | 'LURKERS' | 'INFLUENCER' | string, ({ title: string } & AccordionProps)> = {
    GENERAL: {
        title: 'General',
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