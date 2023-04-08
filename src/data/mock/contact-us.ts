import {BreadcrumbProps} from "@/components/common/breadcrumb/Breadcrumb";
import {ListBulletProps} from "@/components/common/list/listBullet/ListBullet";

export const HEADER: { breadcrumb: BreadcrumbProps['items'] } = {
    breadcrumb: [{url: '/', label: 'Homepage'}, {url: '/contact-us', label: 'Contact Us'}]
}