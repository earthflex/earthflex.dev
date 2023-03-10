import HomeIndex from '@/component/home'
import Layout from '@/component/layout'
import RotateLandscape from '@/component/shared/rotate-landscape';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import SplashScreen from './splash-screen'

export default function Home() {

  const [loading, setLoading] = useState(false);

  const [isMobileLandscape, setIsMobileLandscape] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 2300);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(orientation: landscape) and (max-width: 960px)');
    console.log(mediaQuery);
    const handleMediaQueryChange = (event: { matches: boolean | ((prevState: boolean) => boolean); }) => {
      setIsMobileLandscape(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {isMobileLandscape ? (
        <RotateLandscape />
      ) : (
        <div>
          {loading ? (
            <Layout>
              <HomeIndex />
            </Layout >
          ) : (
            <SplashScreen />
          )}
        </div>
      )
      }
    </>

  );
}


