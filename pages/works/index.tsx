import React from "react";
import Layout from "@/components/layout";
import CardItem from "@/components/shared/card-item";
import { motion } from "framer-motion";
import { EXPERIENCE_TYPE, PROFILE_TYPE, WORKS_ITEMS_TYPE } from "@/types";

import client from "@/client";
import { groq } from "next-sanity";

export default function Works({
    works,
    profile,
    experience,
}:
    {
        works: WORKS_ITEMS_TYPE;
        profile: PROFILE_TYPE;
        experience: EXPERIENCE_TYPE;
    }) {
    return (
        <React.Fragment>
            <Layout works={works} profile={profile} experience={experience}>
                <div className="min-h-[calc(100vh_-_100px)] h-full pt-12 pb-[8rem]">
                    <div className="container">
                        <div className="relative z-[15]">
                            {works.length > 0 && (
                                <motion.div
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.3, type: 'spring' }}
                                    className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:gird-cols-2 lg:grid-cols-3">
                                    {works.map((work) => (
                                        <CardItem
                                            key={work._id}
                                            col='col-span-1'
                                            type={work.mediaType}
                                            theme={work.themeColor.hex}
                                            color={work.textColor.hex}
                                            chip={work.workType}
                                            alt={work.coverimage.attribution}
                                            src={work.coverimage.asset._ref}
                                        />
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment >

    );
}

export async function getStaticProps() {
    try {
        const works = await client.fetch(groq`*[_type == "works"]`);
        const experience = await client.fetch(groq`*[_type == "experience"]`);
        const profile = await client.fetch(groq`*[_type == "profile"]`);
        return {
            props: {
                works,
                profile,
                experience
            },
            revalidate: 10,
        };
    } catch (error) {
        console.error('Failed to fetch data from Sanity:', error);
        return {
            props: {
                works: [],
                profile: {},
                experience: []
            }
        };
    }
}