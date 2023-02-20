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
                                {/* <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 11.5L21.5 1H2L12 11.5Z" fill="#333334" />
                                    <path d="M23 1H21.7059L12.7498 11.1502C12.3517 11.6014 11.6483 11.6014 11.2502 11.1502L2.29412 1H1" stroke="#404043" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M24 0H0V2H24V0Z" fill="#333334" />
                                </svg> */}
                                <TooltipArrowIcon />
                            </div>
                        </Tooltip.Arrow >
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>

    );
}
