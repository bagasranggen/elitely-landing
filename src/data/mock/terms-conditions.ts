import {BreadcrumbProps} from "@/components/common/breadcrumb/Breadcrumb";
import {ListBulletItemProps, ListBulletProps} from "@/components/common/list/listBullet/ListBullet";

export const HEADER: { breadcrumb: BreadcrumbProps['items'], list: ListBulletProps["items"] } = {
    breadcrumb: [{url: '/', label: 'Homepage'}, {url: '/terms-conditions', label: 'Terms and conditions'}],
    list: ['Unlocking connections', 'Dating on steroids ', 'Connect with your favourite Influencers instantly']
}

export const LIST_BULLET: ListBulletItemProps[] = [
    'engage in activities that violate the service policy and objectives',
    'use the service or any information displayed within the service to harass, abuse, defame, threaten, stalk or defraud other users and Service Providers',
    'use the service for any unlawful purpose or encourage, promote, facilitate or instruct others to do so, or violate the privacy or other rights of other users',
    'use the service to cause nuisance or inconvenience, which include offensive, pornographic, sexually explicit, obscene, violent materials, or materials that are harmful in the personal profile of the service, or transmitting content to other users using the service',
    'post any content within the service that promotes discrimination based on race, sex, religion, nationality, disability, sexual orientation or age',
    'promote hate speech, threatening, sexually explicit or pornographic incites violence or contains nudity or graphic or gratuitous violence within the service',
    'include material in the personal profile page which contains images, photographs, audio or video of any person under the age of 18',
    'post, upload or transmit false, misleading or illegal information or content to the service',
    'impersonate any person or entity or post any images of another person without his or her permission',
    'create, control or possess more than one user account, or use a name that is not yours or any temporary email address or phone number or other false information, or we have already suspended or terminated your account, unless you have our permission',
    'send or receive fraudulent or potentially fraudulent funds',
    'collect, store, upload or publish any personal data or information or location about other users without their consent or other than in the course of the permitted use of the service',
    'provide false information or identification evidence to us upon request',
    'infringe the rights of any third party, including without limitation, intellectual property, privacy, publicity or contractual rights, in any manner',
    'use any mechanism to mask your identity or location',
    'imply or state, directly or indirectly, that you are affiliated with or endorsed by the Platform without express written permission',
    'use the services for any commercial or non-private use, such as the sale or advertisement of goods or services',
    'operate or attempt to operate a business via the service',
    'solicit, manage, organize, accept or engage in illicit activity, including without limitation, drug trafficking, gambling, money laundering, prostitution, human trafficking or escort services',
    'contact third parties or users of the service without their express prior written consent',
    'cause to attempt complaints, disputes, claims, chargebacks, fees, penalties or other liability',
]