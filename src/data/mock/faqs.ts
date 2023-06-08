import { CIRCLE } from "@/data/mock/common";

import { AccordionProps } from "@/components/common/accordion/Accordion";
import { PictureItemProps } from "@/components/common/picture/Picture";
import { HeadingOffsetProps } from "@/components/common/heading/headingOffset/HeadingOffset";
import { BreadcrumbProps } from "@/components/common/breadcrumb/Breadcrumb";
import { ListBulletProps } from "@/components/common/list/listBullet/ListBullet";

export const HEADER: {
    breadcrumb: BreadcrumbProps['items'],
    list: ListBulletProps["items"],
    media: Record<'main' | 'bg', PictureItemProps[]>
} = {
    breadcrumb: [ { url: '/', label: 'Homepage' }, { url: '/faqs', label: 'Frequently Asked Questions' } ],
    list: [ 'Unlocking connections', 'Dating on steroids ', 'Connect with your favourite Influencers instantly' ],
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
};

export const FAQS: Record<'GENERAL' | 'LURKERS' | 'INFLUENCER' | string, ({
    title: HeadingOffsetProps['children'],
    image?: PictureItemProps[]
} & AccordionProps)> = {
    GENERAL: {
        title: 'General',
        image: [ {
            src: '/images/heading-line-general.svg',
            width: 143,
            height: 7,
            alt: 'general line'
        } ],
        color: 'tertiary',
        items: [
            {
                title: 'How is my privacy protected?',
                description: `<p>Elitely takes privacy protection very seriously. We will not disclose your personal information to any third party, not even to your date -- without your consent. Likewise, your date is not obligated to share his/her contact details with you.</p>`
            },
            {
                title: 'What are the rules on Elitely?',
                description: `<p>This is a strictly platonic service. No forms of suggestive physical contact will be tolerated. Suggestive conversation topics are not allowed. If any rules have been violated, your date has the right to leave before the stipulated time ends, and no refunds will be made to the client. You may also be banned from using our platform with NO refunds on your unutilised credits.</p>
<p>We do not allow illicit solicitation, prostitution, adult content or any form of fraudulent activities on the platform.</p>`
            },
            {
                title: 'Can I deal directly with the other party?',
                description: `<p>Elitely bans direct arrangements with the other party for various reasons.</p>
<ol>
<li><strong>It is for your own safety and scam prevention</strong>. It is hard for users to verify the identity of the other party if they deal directly. On Elitely, verified parties would have attained a badge on their profiles. The verification involves reviewing the national identity card, or by checking against e-identity systems like Singpass.</li>
<li><strong>It feels extremely fishy and most importantly, you are at risk of disclosing your own personal information!</strong> Imagine your date having access to your bank account/personal information if you transact directly with him/her. There are also enough love/date scams in the news that tells you just how dangerous it is!</li>
<li><strong>We act as an intermediary to ensure that the Personality/Influencer is paid if he/she completes the chat/meetup successfully</strong>. In the same way, we safeguard client’s interests by ensuring that clients do not pay for chats/meets in which there was no response or attendance. </li>
</ol>`
            },
            {
                title: 'What kinds of activities and venues are prohibited?',
                description: `<p>All activities <strong>must</strong> take place in public spaces. Users must declare the meet up point prior to confirming a booking. We are not liable nor responsible for any private arrangements and anything that happens outside of a public place during the date should you choose to partake in it.</p>`
            },
        ]
    },
    LURKERS: {
        title: 'For Lurkers',
        color: 'primary',
        image: [ {
            src: '/images/heading-line-lurkers.svg',
            width: 215,
            height: 7,
            alt: 'general line'
        } ],
        items: [
            {
                title: 'What is the cancellation and refund policy?\n',
                description: `<p>A 100% credit refund is given if you cancel the meetup more than 6 hours before the scheduled meet-up time. A 100% credit refund is applicable if your date did not turn up or when your date cancelled the meetup.</p>
<p>You can choose to reschedule the date with the Personality/Influencer with our rescheduling feature on the platform up to 24 hours before the meetup.</p>`
            },
            {
                title: 'How do I unlock a chat with a Personality/Influencer?',
                description: `<p>Simply navigate to a profile, and click on the “Meet” button. The Lurker sends a meet request to a Personality/Influencer. Once the Personality/Influencer accepts the request, the request is then routed back to the Lurker for payment – once payment is complete, the meet-up is confirmed!</p>`
            },
            {
                title: 'Why do some Personalities/Influencers not have the chat or the meet buttons?',
                description: `<p>It means they did not list their profiles for chats or meets.</p>`
            },
            {
                title: 'Why do some Personalities/Influencers have their chat or meet buttons greyed out?',
                description: `<p>It means they are fully booked out for chats or meets. Keep looking out, once their availability is freed up, you will be able to unlock a chat or meet too with them! If the chat button is greyed out, it means the Personality/Influencer’s chat quota has been reached for the month. Profiles without a chat/meet button are not available for chats/meets.</p>`
            },
            {
                title: 'I am on a meet-up, can I exchange contact numbers with my date?',
                description: `<p>Absolutely, as long as your date is comfortable with it! Do note that despite this, there are no obligations for platform members to divulge their contact details. However, we ban private arrangements involving any monetary benefits.</p>`
            },
            {
                title: 'I am a Lurker and my date is late. Can I get a refund?',
                description: `<p>If your date is more than 30 minutes late, you are allowed to cancel the date with a full refund (in platform credits). If your date is late by 30 minutes or less, he/she will stay for the amount of time that he/she is late (i.e. If your date is late for 15 minutes, he/she will stay for an additional 15 minutes). </p>
<p>In the event that your date does not turn up, you will get a 100% credit refund and your date will receive a penalty from us.</p>`
            },
            {
                title: 'Can I make a booking for a Personality/Influencer and invite my friends for the meet-up, or for more than 1 Personality/Influencer in the same time slot?',
                description: `<p>Yes, absolutely!</p>`
            },
            {
                title: 'How do I make payment for a meet-up or chat?',
                description: `<p>Payment must be made through the platform upon confirmation of the meet-up by both parties. Upon making payment on the platform, the chat will be automatically unlocked. Payment is only accepted in one or more of these formats: credit card, Paynow, Grabpay and Gopay (to be released).</p>`
            },
            {
                title: 'Can I make cash payment during the meet-up?',
                description: `<p>No. Payment must be made upfront via credit card, Grabpay, or Paynow to our platform either through direct payment or the purchase of credits before a booking is confirmed on our application. This applies to any extension requests made prior to or during a meet-up.</p>`
            },
            {
                title: 'I am seeing the option to pay a Personality/Influencer for his/her cab fare.',
                description: `<p>When scheduling a meet up, there is an option to subsidise a Personality/Influencer’s cab fare at the payments checkout page. You may choose to subsidise it for a one-way trip or two-way trip. This option is entirely optional. </p>`
            },
        ]
    },
    INFLUENCER: {
        title: 'For Personalities / Influencers',
        color: 'secondary',
        image: [ {
            src: '/images/heading-line-influencers.svg',
            width: 520,
            height: 7,
            alt: 'general line'
        } ],
        items: [
            {
                title: 'I am a Personality/Influencer, can I cancel a meet-up?',
                description: `<p>Please do not accept a meet request if you are unsure of your schedule.</p>
<p>You are allowed to cancel a meet-up more than 6 hours before the scheduled meet-up time. You can choose to reschedule the date with a Lurker with our rescheduling feature on the platform up to 12 hours before the meet-up.</p>
<p>If you really cannot make it for a meet-up less than 6 hours before the scheduled meet-up time, you must inform through the chat function before the date, to avoid the Luker being present for the date. Please state the reason for cancellation.</p>
<p><em><strong>Personalities/Influencers who do not turn up for a meet-up, do not inform the Lurker about cancelling, or cancelling less than 6 hours before the meet-up twice a month will incur a SGD 50 fine</strong>, to be deducted from any outstanding payments to them, or any future payments (if there are no outstanding payments). You may also be removed from our platform with all pending payments withheld. Waivers may be approved on a case-by-case basis. The Platform’s decision is final.</em></p>`
            },
            {
                title: 'I am a Personality/Influencer and my date is late.',
                description: `<p>If your date is late by less than 30 minutes, platform Personalities/Influencers are obligated to ensure the meet-up duration remains the same as the duration booked. If your date is late by more than 30 minutes, Personalities/Influencers are only obligated to stay up to a maximum of 30 minutes past the meet-up end time.</p>`
            },
            {
                title: 'I’m a Personality/Influencer, can I unlock a chat/meet up with another Personality/Influencer?',
                description: `<p>Yes, absolutely!</p>`
            },
            {
                title: 'My date has broken the rules of engagement (i.e. inappropriate physical contact, conversation about suggestive topics). What do I do?',
                description: `<p>You have the right to leave before the stipulated time ends, and no refunds will be made to the client. As a rule of thumb, we suggest to give a firm warning to the client at the first sign of misconduct. If he/she does not accede to the warning, you reserve the right to leave.</p>
<p>Please also report the client’s profile using the “report” function on his/her profile page and we will investigate. Any form of evidence (photos/video recordings) would be beneficial for us during the investigation. Our decision is final and we will not hesitate to take the appropriate actions.</p>`
            },
            {
                title: 'How do I get paid for the various services that have been completed?',
                description: `<p>For each service (meet/chats) that have been completed without disputes from the paying user, the earnings will be released within 10 working days on your dashboard.</p>
<p>You can choose to withdraw your earnings through Wise, either by bank transfer or Paynow (for Singapore users). Do note the <strong>minimal earnings withdrawal of SGD 50</strong> (and the equivalent in other currencies) is subject to a fee of <strong>SGD 0.60 per withdrawal</strong>, in addition to a <strong>25% commission</strong>.</p>
<p>These fees are necessary for maintaining and marketing the platform so you get to earn more!</p>`
            },
        ]
    }
};