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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    )
}

export default BackDrop;