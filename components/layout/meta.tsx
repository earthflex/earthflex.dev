import Head from "next/head";
import React from "react";
const DOMAIN = "https://earthflex.dev"; /* #production */

export default function Meta({
  title = "Earthflex.dev | Apiwat Anekboon",
  description = "Call me Apiwat Anekboon, Earth I'm Web Developer from Thailand, with 4 years of experience in web development.",
  author = "Apiwat Anekboon",
  keyword = "Earth, Apiwat, Anekboon, earthflex, อภิวัฒน์, เอนกบุญ, เอิร์ธ,front-end, UX, UI, Portfolio, Design",
  image = `${DOMAIN}/api/og`,
}: {
  title?: string;
  description?: string;
  author?: string;
  keyword?: string;
  image?: string;
}) {
  const [currentFavicon, setCurrentFavicon] = React.useState(0);
  const favicon = [
    "/favicon/frame_1.webp",
    "/favicon/frame_2.webp",
    "/favicon/frame_3.webp",
    "/favicon/frame_4.webp",
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFavicon((prevImage) => (prevImage + 1) % favicon.length);
    }, 500);

    return () => clearInterval(interval);
  }, [favicon.length]);

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />

      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keyword" content={keyword} />
      <meta name="theme-color" content="#000" />
      <link rel="manifest" href="/manifest.json" />
      {/* <link rel="icon" href="favicon.ico" type="image/x-icon" /> */}
      <link rel="icon" type="image/webp" href={favicon[currentFavicon]} />
      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon-precomposed.png"
      ></link>
      <link
        rel="apple-touch-icon-precomposed"
        sizes="180x180"
        href="/apple-touch-icon-precomposed.png"
      />

      <meta itemProp="image" content={`${DOMAIN}/thumbnail-gif.gif`} />
      {/* <meta itemProp="image" content={image} /> */}
      <meta property="og:logo" content={`${DOMAIN}/logo.webp`}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${DOMAIN}/thumbnail-gif.gif`} />
      {/* <meta property="og:image" content={image} /> */}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@vercel" />
      <meta name="twitter:creator" content="@earthflex" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content={image} /> */}
      <meta name="twitter:image" content={`${DOMAIN}/thumbnail-gif.gif`} />
    </Head>
  );
}
