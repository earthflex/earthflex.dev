import Head from "next/head";

// const DOMAIN = "https://2275-49-49-233-191.ap.ngrok.io";
const DOMAIN = "https://earthflex.dev";

export default function Meta({
    title = "Earthflex.dev",
    description = "My name is Apiwat Anekboon. I'm a front-end developer from Thailand with 4 years of expertise in web development. During the past several years,I've concentrated on front-end development using HTML, CSS, and JavaScript. In my leisure time, I like to explore art.",
    image = `${DOMAIN}/api/og`,
}: {
    title?: string;
    description?: string;
    image?: string;
}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="favicon.ico" type="image/x-icon" />
            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            <link rel="icon" type="image/png" href="favicon.png" />
            <link rel="apple-touch-icon-precomposed" sizes="180x180" href="/apple-touch-icon-precomposed.png" />

            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta itemProp="image" content={image} />
            <meta property="og:logo" content={`${DOMAIN}/logo.png`}></meta>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@vercel" />
            <meta name="twitter:creator" content="@steventey" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Head>
    );
}
