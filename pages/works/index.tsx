import React from "react";
import Layout from "@/components/layout";
import CardItem from "@/components/shared/card-item";
import { motion } from "framer-motion";

const WOKR_ITEM = [
    {
        year: '2020',
        work: [
            {
                col: '',
                type: 'lottie',
                theme: '#333',
                name: 'DOA',
                chip: ['Web'],
                src: '/works/doa.json',
            },
        ]
    },
    {
        year: '2019',
        work: [
            {
                col: '',
                type: 'img',
                theme: '#F37A21',
                name: 'Partnership',
                chip: ['Graphic'],
                src: '/works/partnership.png',
            },
            {
                col: '',
                type: 'img',
                theme: '#333',
                name: 'ZMyHome',
                chip: ['Graphic'],
                src: '/works/zmyhome.png',
            },
            {
                col: '',
                type: 'img',
                theme: '#334358',
                chip: ['Motion'],
                name: 'KPI Courseware',
                src: '/works/kpi-cover.png',
            }
        ]
    }
]

export default function Works() {
    return (
        <React.Fragment>
            <Layout>
                <div className="min-h-[calc(100vh_-_100px)] h-full pt-12 pb-[8rem]">
                    <div className="container">
                        <div className="relative z-[15] flex flex-col gap-4">
                            {WOKR_ITEM.map((item, index) => (
                                <div className="flex gap-3" key={index}>
                                    <div className="flex flex-col align-middle justify-center gap-4 mt-3">
                                        <div className="bg-white shadow-custom rounded-full w-3 h-3" />
                                        <motion.div className="bg-timeline filter-shadow" />
                                    </div>
                                    <div>
                                        <div className="mb-1">
                                            <span className="font-medium text-2xl px-2 py-1 text-shadow ">{item.year}</span>
                                        </div>
                                        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                            {item.work.map((work, workIndex) => (
                                                <React.Fragment key={workIndex}>
                                                    <CardItem
                                                        col={work.col}  /* default = col-span-1 */
                                                        type={work.type}
                                                        theme={work.theme}
                                                        alt={work.name}
                                                        chip={work.chip}
                                                        src={work.src} /* default = col-1 752x848 col-2 1552×849 col-3 2352×849 */
                                                    />
                                                </React.Fragment>
                                            ))}
                                        </div>
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