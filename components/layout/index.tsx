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

    const { modalOpen, close, open } = useModal();

    return (
        <React.Fragment>
            <DataContext.Provider value={{ works, profile, experience }}>
                <Meta {...meta} />
                <Topbar onClick={open} />
                <Header />
                <Dock onClick={open} />

                {modalOpen && (
                    <Modal modalOpen={modalOpen} handleClose={close} >
                        <ResumeDetail handleClose={close} />
                    </Modal>
                )}
                <main>
                    {children}
                </main>
            </DataContext.Provider>
        </React.Fragment>
    );
}
