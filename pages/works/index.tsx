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
}: {
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
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.3, type: "spring" }}
                  className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:gird-cols-2 lg:grid-cols-2 2xl:grid-cols-2"
                >
                  {works.map((work) => (
                    <CardItem
                      // link={work.link}
                      key={work._id}
                      col="col-span-1"
                      name={work.name ? work.name : ""}
                      type={work.mediaType}
                      theme={work.themeColor ? work.themeColor.hex : "#000"}
                      color={work.textColor ? work.textColor.hex : "#fff"}
                      chip={work.workType}
                      alt={work.name ? work.name : ""}
                      src={
                        work.coverimage && work.coverimage.asset
                          ? work.coverimage.asset._ref
                          : undefined
                      }
                    />
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  try {
    const works = await client.fetch(
      groq`*[_type == "works"] | order(_createdAt desc)`
    );
    const experience = await client.fetch(
      groq`*[_type == "experience"] | order(_createdAt desc)`
    );
    const profile = await client.fetch(groq`*[_type == "profile"]{
            ..., 
            "pdf": pdf.asset->{url, originalFilename, _id}
        }`);
    return {
      props: {
        works,
        profile,
        experience,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Failed to fetch data from Sanity:", error);
    return {
      props: {
        works: [],
        profile: {},
        experience: [],
      },
    };
  }
}
