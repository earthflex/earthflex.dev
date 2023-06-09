import React from 'react';
import Layout from '@/components/layout'
import { Suspense, useEffect, useState } from 'react';
import Meta from '@/components/layout/meta';
import Loading from './loading';
import Intro from '@/components/home/intro';
import About from '@/components/home/about';
import Cookies from '@/components/shared/cookies';
import Footer from '@/components/home/footer';
import { WORKS_ITEMS_TYPE, PROFILE_TYPE, EXPERIENCE_TYPE } from '@/types';

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
    const storageTime = sessionStorage.getItem('loadingStartTime');
    const currentTime = new Date().getTime();
    
    // เช็คว่ามีข้อมูลใน sessionStorage หรือไม่
    if (!storageTime) {
      // ถ้าไม่มี ให้ตั้งเวลาโหลด
      setTimeout(() => {
        setLoading(true);
        // เก็บเวลาที่เริ่มต้นลงใน sessionStorage
        sessionStorage.setItem('loadingStartTime', currentTime.toString());
      }, 2300);
    } else {
      // ถ้ามีข้อมูลใน sessionStorage ตรวจสอบว่าผ่านไป 1 ชม. หรือยัง
      const elapsedTime = currentTime - Number(storageTime);
      if (elapsedTime < 3600000) { // 1 ชม. เท่ากับ 3600000 มิลลิวินาที
        // ถ้ายังไม่ถึง 1 ชม. ให้ set loading เป็น true
        setLoading(true);
      } else {
        // ถ้าเกิน 1 ชม. ให้ตั้งเวลาโหลดใหม่
        setTimeout(() => {
          setLoading(true);
          sessionStorage.setItem('loadingStartTime', currentTime.toString());
        }, 2300);
      }
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
          <Cookies />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Meta />
          <Loading />
        </React.Fragment>
      )}
    </>
  )
}

export async function getStaticProps() {
  try {
    const experience = await client.fetch(groq`*[_type == "experience"] | order(_createdAt desc)`);
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
    console.error('Failed to fetch data from Sanity:', error);
    return {
      props: {
        profile: {},
        experience: []
      }
    };
  }
}