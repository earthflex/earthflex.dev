import React from "react";
import Layout from "@/components/layout";
import { Suspense, useEffect, useState } from "react";
import Meta from "@/components/layout/meta";
import Loading from "./loading";
import Intro from "@/components/home/intro";
import About from "@/components/home/about";
import Footer from "@/components/home/footer";
import { WORKS_ITEMS_TYPE, PROFILE_TYPE, EXPERIENCE_TYPE } from "@/types";

import client from "@/client";
import { groq } from "next-sanity";

export default function Home({
  works,
  profile,
  experience,
}: {
  works: WORKS_ITEMS_TYPE;
  profile: PROFILE_TYPE;
  experience: EXPERIENCE_TYPE;
}) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadingStart = sessionStorage.getItem("loadingStart");

    if (loadingStart === "Hi") {
      setLoading(true);
    } else {
      setTimeout(() => {
        setLoading(true);
        sessionStorage.setItem("loadingStart", "Hi");
      }, 2300);
    }
  }, []);

  return (
    <>
      {loading ? (
        <React.Fragment>
          <Layout works={works} profile={profile} experience={experience}>
            <Suspense fallback={<Loading />}>
              <Intro />
              <About />
              <Footer />
            </Suspense>
          </Layout>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Meta />
          <Loading />
        </React.Fragment>
      )}
    </>
  );
}

export async function getStaticProps() {
  try {
    const experience = await client.fetch(
      groq`*[_type == "experience"] | order(_createdAt desc)`
    );
    const profile = await client.fetch(groq`*[_type == "profile"]{
      ..., 
      "pdf": pdf.asset->{url, originalFilename, _id}
  }`);
    return {
      props: {
        profile,
        experience,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Failed to fetch data from Sanity:", error);
    return {
      props: {
        profile: {},
        experience: [],
      },
    };
  }
}
