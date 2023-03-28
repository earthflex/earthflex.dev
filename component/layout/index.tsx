// import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import Meta from "./meta";
import { ButtonScale, FadeIn } from "@/lib/constants";
import Dock from "../dock/dock";
import * as HoverCard from '@radix-ui/react-hover-card';
import { DialogCardArrowIcon, HoverCardArrowIcon } from "../Icons";
import Image from "next/image";
import Header from "../shared/header";


export default function Layout({
    meta,
    children,
}: {
    meta?: {
        title?: string;
        description?: string;
        image?: string;
    };
    children: ReactNode;
}) {
    // const scrolled = useScroll(50);
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
