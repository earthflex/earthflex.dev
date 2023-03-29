import { ReactNode } from "react";
import Dock from "../shared/dock/dock";
import Header from "../shared/header";
import Meta from "./meta";


export default function Layout({
    meta,
    children,
}: {
    meta?: {
        title?: string;
        description?: string;
        author?: string;
        keyword?: string;
        image?: string;
    };
    children: ReactNode;
}) {
    return (
        <>
            <Meta {...meta} />
            <Header />
            <Dock />
            <main>
                {children}
            </main>
        </>
    );
}
