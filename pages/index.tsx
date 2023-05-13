import React from 'react';
import Layout from '@/components/layout'
import { Suspense, useEffect, useState } from 'react';
import Meta from '@/components/layout/meta';
import Loading from './loading';
import Intro from '@/components/home/intro';
import About from '@/components/home/about';
import Cookies from '@/components/shared/cookies';

export default function Home({
  meta,
}: {
  meta?: {
    title?: string;
    description?: string;
    author?: string;
    keyword?: string;
    image?: string;
  };
}) {

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setTimeout(() => setLoading(true), 2300);
  }, []);

  return (
    <>
      {loading ? (
        <React.Fragment>
          <Layout>
            <Suspense fallback={<Loading />}>
              <Intro />
              <About />
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
