import React from 'react';

import {useMeasure} from "react-use";

import Navigation from "@/components/layout/navigation/Navigation";
import Footer from "@/components/layout/footer/Footer";

export type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({children}: LayoutProps): React.ReactElement => {
    const [navigationRef, {top, bottom}]: any = useMeasure()

    return <>
        <Navigation ref={navigationRef} />
        <main style={{'--nav-height': `${top + bottom}px`} as React.CSSProperties}>{children}</main>
        <Footer />
    </>;
};

export default Layout;