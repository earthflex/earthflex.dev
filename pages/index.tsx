import HomeIndex from '@/component/home'
import Layout from '@/component/layout'
import React from 'react';
import SplashScreen from './splash-screen'

export default function Home() {

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 2200);
  }, []);

  return (
    <>
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
