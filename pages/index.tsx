import HomeIndex from '@/components/home';
import Layout from '@/components/layout'
import { Suspense, useEffect, useState } from 'react';
import Loading from './loading';
import Meta from '@/components/layout/meta';

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
        <Layout>
          <Suspense fallback={<Loading />}>
            <HomeIndex />
          </Suspense>
        </Layout>
      ) : (
        <>
          <Meta />
          <Loading />
        </>
      )}
    </>
  )
}
