import { motion } from "framer-motion";
import { ReactNode } from "react";

const BackDrop = ({ children, onClick }: {
    children: ReactNode,
    onClick: () => void
}) => {

    return (
        <motion.div
            className="backdrop"
            onClick={onClick}
        >
            {children}
        </motion.div>
    )
}

export default BackDrop;