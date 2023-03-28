import HomeIndex from '@/component/home'
import Layout from '@/component/layout'
import RotateLandscape from '@/component/shared/rotate-landscape';
import React, { useEffect, useState } from 'react';
import SplashScreen from './splash-screen'

export default function Home() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 2300);
  }, []);

  return (
    <>
    {/* <RotateLandscape /> */}
      {loading ? (
        <Layout>
          
          <HomeIndex />
        </Layout >
      ) : (
        <SplashScreen />
      )}
    </>

  );
}


