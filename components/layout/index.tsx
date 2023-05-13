import { ReactNode } from "react";
import Dock from "../shared/dock/dock";
import Header from "../shared/header";
import Meta from "./meta";
import React from "react";
import Topbar from "../shared/top-bar";
import Cookies from "../shared/cookies";
import { motion } from "framer-motion";
import useModal from "../hook/use-modal";
import ResumeDetail from "../resume";
import Modal from "../shared/modal/modal";

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

    const { modalOpen, close, open } = useModal();

    return (
        <React.Fragment>
            <Meta {...meta} />
            <Topbar onClick={open} />
            <Header />
            <Dock onClick={open} />

            {modalOpen && (
                <Modal modalOpen={modalOpen} handleClose={close} >
                    <ResumeDetail handleClose={close} />
                </Modal>
            )}
            <Cookies />
            <main>
                {children}
            </main>
        </React.Fragment>
    );
}
