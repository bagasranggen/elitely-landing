import type { AppProps } from 'next/app';

import '../styles/scss/bootstrap.scss';
import '../styles/scss/main.scss';
import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/playfair-display/600.css";

import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
    return <Layout><Component {...pageProps} /></Layout>;
}
