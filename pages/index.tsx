import HomeIndex from '@/components/home';
import Layout from '@/components/layout'
import { Suspense, useEffect, useState } from 'react';
import Loading from './loading';

export default function Home() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 2300);
  }, []);

  return (
    <>
      <Layout>
        {loading ? (
          <Suspense fallback={<Loading />}>
            <HomeIndex />
          </Suspense>
        ) : (
          <Loading />
        )}
      </Layout>
    </>
  )
}
