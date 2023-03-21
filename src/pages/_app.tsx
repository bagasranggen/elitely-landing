import type {AppProps} from 'next/app'

import '../styles/scss/bootstrap.scss';
import '../styles/scss/main.scss';

import Layout from "@/components/layout/Layout";

export default function App({Component, pageProps}: AppProps) {
    return <Layout><Component {...pageProps} /></Layout>
}
