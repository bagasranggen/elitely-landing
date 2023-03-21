import React from 'react';
import Navigation from "@/components/layout/navigation/Navigation";
import Footer from "@/components/layout/footer/Footer";

export type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({children}: LayoutProps): React.ReactElement => (
    <>
        <Navigation />
        <main>{children}</main>
        <Footer />
    </>
);

export default Layout;