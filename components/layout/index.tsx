import { ReactNode } from "react";
import Dock from "../shared/dock/dock";
import Header from "../shared/header";
import Meta from "./meta";
import React from "react";
import Topbar from "../shared/top-bar";
import useModal from "../hook/use-modal";
import ResumeDetail from "../resume";
import Modal from "../shared/modal/modal";

import { MetaProps, EXPERIENCE_TYPE, PROFILE_TYPE, WORKS_ITEMS_TYPE } from "@/types";
import { DataContext } from "@/context";
import { motion } from "framer-motion";
import useWindowSize from "../hook/use-window-size";

export default function Layout({
    meta,
    children,
    works,
    profile,
    experience,
}: {
    meta?: MetaProps;
    children: ReactNode;
    works: WORKS_ITEMS_TYPE;
    profile: PROFILE_TYPE;
    experience: EXPERIENCE_TYPE;
}) {

    const { isDesktop, isTablet } = useWindowSize();
    const { modalOpen, close, open } = useModal();

    const scaleValue = isDesktop ? 0.95 : (isTablet ? 0.95 : 0.9);

    const variants = {
        open: {
            y: 60,
            scale: scaleValue,
            borderRadius: "30px",
            border:"2px solid rgba(221, 221, 221, 0.2)",
            transition: { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }
        },
        closed: {
            y: 0,
            scale: 1,
            borderRadius: "30px 30px 0 0",
            border: 'none',
            transition: { duration: 0.3 }
        }
    };

    return (
        <React.Fragment>
            <DataContext.Provider value={{ works, profile, experience }}>
                <Meta {...meta} />
                <Topbar onClick={open} />
                <motion.div
                    className="wrapper-main"
                    variants={variants}
                    animate={modalOpen ? "open" : "closed"}
                >
                    <Header />
                    <main>
                        {children}
                    </main>
                </motion.div>
                <Dock onClick={open} />
                {modalOpen && (
                    <Modal modalOpen={modalOpen} handleClose={close} >
                        <ResumeDetail handleClose={close} />
                    </Modal>
                )}
            </DataContext.Provider>
        </React.Fragment>
    );
}


