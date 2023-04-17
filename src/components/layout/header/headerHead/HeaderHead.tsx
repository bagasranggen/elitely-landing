import React from 'react';
import Head from "next/head";

export type HeaderHeadProps = {
    title?: string;
};

const HeaderHead = ({title}: HeaderHeadProps): React.ReactElement => {
    const webName = process.env.NEXT_PUBLIC_WEB_NAME;
    const pageTitle = webName ? (title ? `${title} | ${webName}` : webName) : webName;

    return (
        <Head>
            <title>{pageTitle}</title>
        </Head>
    )
};

export default HeaderHead;