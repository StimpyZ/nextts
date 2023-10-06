import Head from 'next/head'
import React from 'react'

interface LayoutProps {
    children: React.ReactNode
    page: string
    className?: string
}
export default function Layout ({ children, page, className }: LayoutProps): JSX.Element {

    return (
        <>
            <Head>
                <title>Some Page - {page}</title>
                <meta name="description" content="some description" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                {/* <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin='anonymous'
                /> */}
                {/* <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
                /> */}
            </Head>

            {/* <Header /> */}

            <main className={className}>
                {children}
            </main>
        </>
    )

}
