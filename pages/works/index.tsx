import React from "react";
import Layout from "@/components/layout";
import CardItem from "@/components/shared/card-item";
import { motion } from "framer-motion";

const WOKR_ITEM = [
    {
        year: '2019 - 2022',
        work: [
            {
                col: 'col-span-1',
                type: 'img',
                theme: '#FF4D00',
                color: 'white',
                name: 'Mobilyst Tech',
                chip: ['Web App'],
                src: '/works/mobilyst-tech-min.png',
            },
            {
                col: 'col-span-1',
                type: 'img',
                theme: '#FA463C',
                color: 'white',
                name: 'UAV',
                chip: ['Web App'],
                src: '/works/uav-min.gif',
            },
            {
                col: 'col-span-1',
                type: 'img',
                theme: '#FECD22',
                color: 'black',
                name: 'DOA',
                chip: ['Website'],
                src: '/works/doa-min.gif',
            },
            {
                col: 'col-span-1',
                type: 'img',
                theme: '#FECD22',
                color: 'black',
                name: 'DOA',
                chip: ['Website'],
                src: '/works/doa-sub-min.png',
            },
            {
                col: 'col-span-1',
                type: 'img',
                theme: '#AE2024',
                color: 'white',
                name: 'FAA',
                chip: ['Website'],
                src: '/works/faa-min.png',
            },
            {
                col: 'col-span-1',
                type: 'img',
                theme: '#00ADEE',
                color: 'white',
                name: 'OR',
                chip: ['Web App'],
                src: '/works/or-min.gif',
            },
            {
                col: 'col-span-1',
                type: 'img',
                theme: '#952D34',
                color: '#fff',
                name: 'Nida',
                chip: ['Website'],
                src: '/works/nida-min.png',
            },
            {
                col: 'col-span-1',
                type: 'img',
                theme: '#0096A9',
                color: 'white',
                name: 'Tokio Marine',
                chip: ['Website'],
                src: '/works/kyc-min.png',
            },
            {
                col: 'col-span-1',
                type: 'img',
                theme: '#009E54',
                color: 'white',
                name: 'รพ.ลาดพร้าว',
                chip: ['Mobile Application'],
                src: '/works/lp-min.gif',
            },
            {
                col: 'col-span-1',
                type: 'img',
                theme: '#FE0000',
                color: 'white',
                name: 'SOS',
                chip: ['e-Commerce'],
                src: '/works/sos-min.png',
            },
            {
                col: 'col-span-1',
                type: 'img',
                theme: '#041B5F',
                color: 'white',
                name: 'ELC Auto cash',
                chip: ['Mobile Application'],
                src: '/works/ecl-min.png',
            },
            {
                col: 'col-span-1',
                type: 'img',
                theme: '#F54609',
                color: 'white',
                name: 'Game Learn',
                chip: ['Website'],
                src: '/works/gamelearn-min.gif',
            },
            {
                col: 'col-span-1',
                type: 'img',
                theme: '#f4bd3e',
                color: 'black',
                name: 'KPI',
                chip: ['Website'],
                src: '/works/kpi-min.png',
            },
            {
                col: 'col-span-1',
                type: 'img',
                theme: '#7D4C2C',
                color: 'white',
                name: 'bsa',
                chip: ['Website'],
                src: '/works/bsa-min.png',
            },
            {
                col: 'col-span-1',
                type: 'img',
                theme: '#F3E307',
                color: '#012756',
                name: 'Depa',
                chip: ['Mobile Application'],
                src: '/works/depa-min.png',
            },

            {
                col: 'col-span-1',
                type: 'img',
                theme: '#175590',
                color: 'white',
                name: 'e-CPP',
                chip: ['Website'],
                src: '/works/ecpp-min.png',
            },
            {
                col: 'col-span-1',
                type: 'img',
                theme: '#F37A21',
                color: 'white',
                name: 'Partnership',
                chip: ['Graphic'],
                src: '/works/partnership-min.png',
            },
            {
                col: 'col-span-1',
                type: 'img',
                theme: '#FE0000',
                color: 'white',
                name: 'FAA',
                chip: ['Collage'],
                src: '/works/collage-min.gif',
            },
            {
                col: 'col-span-1',
                type: 'img',
                theme: '#333',
                color: 'white',
                name: 'ZMyHome',
                chip: ['Graphic'],
                src: '/works/zmyhome-min.png',
            },
            {
                col: 'col-span-1',
                type: 'img',
                theme: '#334358',
                color: 'white',
                chip: ['Motion'],
                name: 'KPI Courseware',
                src: '/works/kpi-cover-min.png',
            }
        ]
    },
]

export default function Works() {
    return (
        <React.Fragment>
            <Layout>
                <div>

                </div>
                <div className="min-h-[calc(100vh_-_100px)] h-full pt-12 pb-[8rem]">
                    <div className="container">
                        <div className="relative z-[15] flex flex-col gap-4">
                            {WOKR_ITEM.map((item, index) => (
                                <div className="flex gap-3" key={index}>
                                    {/* <div className="flex flex-col flex-[60px] align-middle justify-center gap-4 mt-3">
                                        <div className="bg-white shadow-custom rounded-full w-3 h-3 mx-auto" />
                                        <motion.div className="bg-timeline filter-shadow" />
                                    </div> */}
                                    <div className="w-full">
                                        {/* <div className="mb-1">
                                            <span className="font-medium text-2xl px-2 py-1 text-shadow ">{item.year}</span>
                                        </div> */}
                                        <motion.div
                                            initial={"offscreen"}
                                            whileInView={"onscreen"}
                                            viewport={{ once: false }}
                                            transition={{ duration: 0.3, type: 'spring' }}
                                            className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:gird-cols-2 lg:grid-cols-3">
                                            {item.work.map((work, workIndex) => (
                                                <React.Fragment key={workIndex}>
                                                    <motion.div className="work-grid"

                                                    >
                                                        <CardItem
                                                            col={work.col}  /* default = col-span-1 */
                                                            type={work.type}
                                                            theme={work.theme}
                                                            color={work.color}
                                                            alt={work.name}
                                                            chip={work.chip}
                                                            src={work.src} /* default = col-1 752x848 col-2 1552×849 col-3 2352×849 */
                                                        />
                                                    </motion.div>
                                                </React.Fragment>
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment >

    );
}