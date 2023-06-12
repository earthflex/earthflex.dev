import {
    useCallback,
    useEffect,
    useRef,
} from "react";
import { motion } from "framer-motion";
import BackDrop from "./backdrop";
import { ReactNode } from "react";
import useWindowSize from "@/components/hook/use-window-size";
import { contentShow } from "@/lib/constants";
import SlideSheet from "./slide-sheet ";

export default function Modal({
    children,
    modalOpen,
    handleClose,
}: {
    children: ReactNode;
    handleClose: () => void;
    modalOpen: boolean;
}) {

    const desktopModalRef = useRef(null);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleClose();
            }
        },
        [handleClose],
    );

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onKeyDown]);


    const { isMobile, isDesktop, isTablet } = useWindowSize();

    return (
        <BackDrop onClick={handleClose}>
            {isMobile && (
                <SlideSheet handleClose={handleClose}>
                    {children}
                </SlideSheet>
            )}
            {(isTablet || isDesktop) && (
                <motion.div
                    ref={desktopModalRef}
                    key="desktop-modal"
                    onClick={(e) => e.stopPropagation()}
                    className="modal"
                    variants={contentShow}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {children}
                </motion.div>
            )}
        </BackDrop>
    )
}