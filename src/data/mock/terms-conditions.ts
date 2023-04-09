import {BreadcrumbProps} from "@/components/common/breadcrumb/Breadcrumb";
import {ListBulletItemProps, ListBulletProps} from "@/components/common/list/listBullet/ListBullet";

export const HEADER: { breadcrumb: BreadcrumbProps['items'], list: ListBulletProps["items"] } = {
    breadcrumb: [{url: '/', label: 'Homepage'}, {url: '/terms-conditions', label: 'Terms and conditions'}],
    list: ['Unlocking connections', 'Dating on steroids ', 'Connect with your favourite Influencers instantly']
}

export const LIST_BULLET: ListBulletItemProps[] = [
    'engage in activities that violate the service policy and objectives;',
    'use the service or any information displayed within the service to harass, abuse, defame, threaten, stalk or defraud other users and Service Providers;',
    'use the service for any unlawful purpose or encourage, promote, facilitate or instruct others to do so, or violate the privacy or other rights of other users;',
    'use the service to cause nuisance or inconvenience, which include offensive, pornographic, sexually explicit, obscene, violent materials, or materials that are harmful in the personal profile of the service, or transmitting content to other users using the service',
    'post any content within the service that promotes discrimination based on race, sex, religion, nationality, disability, sexual orientation or age;',
    'promote hate speech, threatening, sexually explicit or pornographic incites violence or contains nudity or graphic or gratuitous violence within the service;',
    'include material in the personal profile page which contains images, photographs, audio or video of any person under the age of 18;',
    'post, upload or transmit false, misleading or illegal information or content to the service;',
    'engage in activities that violate the service policy and objectives;',
    'use the service or any information displayed within the service to harass, abuse, defame, threaten, stalk or defraud other users and Service Providers;',
    'use the service for any unlawful purpose or encourage, promote, facilitate or instruct others to do so, or violate the privacy or other rights of other users;',
    'post any content within the service that promotes discrimination based on race, sex, religion, nationality, disability, sexual orientation or age;',
    'promote hate speech, threatening, sexually explicit or pornographic incites violence or contains nudity or graphic or gratuitous violence within the service;',
    'include material in the personal profile page which contains images, photographs, audio or video of any person under the age of 18;',

]