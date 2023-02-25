import React from "react";
import Head from 'next/head';
import Header from './Header';

const Layout = ({ title, description, keywords, pageClass, children }) => {
    return (
        <div className={`page ${pageClass}`}>
            <div class="bg"></div>
            <Head>
                <title>{title} | Renovating Health</title>
                <meta name="description" content={description} />
                {keywords && <meta name="keywords" content={keywords} />}
                <meta name='viewport' content='width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0' />
                <link rel="shortcut icon" sizes="16x16 24x24 32x32 64x64" href="/images/favicon.ico" type="image/x-icon" />
            </Head>
            <Header />
            <main className="page-main">
                {children}
            </main>
        </div>
    )
};

export default Layout;
