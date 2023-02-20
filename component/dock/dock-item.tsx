import * as React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { motion } from "framer-motion";
import { TooltipArrowIcon } from '../Icons';

export default function dockItem({
    title,
    classicon,
    icon,
}: {
    title: string;
    classicon: string,
    icon: string;
}) {
    return (
        <Tooltip.Provider delayDuration={0} skipDelayDuration={500} disableHoverableContent={false}
        >
            <Tooltip.Root>
                <Tooltip.Trigger asChild >
                    <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}>
                        <motion.div >
                            <div className={`icon-item ${classicon}`}>
                                <img src={icon} />
                            </div>
                        </motion.div>
                    </motion.div >
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content className="tooltip-text" sideOffset={20}>
                        {title}
                        <Tooltip.Arrow asChild={true} className="tooltip-arrow" width={30} height={15} >
                            <div>
                                <TooltipArrowIcon />
                            </div>
                        </Tooltip.Arrow >
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>

    );
}
