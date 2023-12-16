import React from "react";
import Head from "next/head";

interface MainLayoutProps {
    titulo: string;
    children?: React.ReactNode;
}

export default function MainLayout({titulo, children}: MainLayoutProps) {
    return (
        <div className="h-screen w-screen bg-slate-600">
            <Head>
                <title>{titulo}</title>
            </Head>

            <h1>hsususu ffdf</h1>

            <main>
                <div>{children}</div>
            </main>
        </div>
    );
}
