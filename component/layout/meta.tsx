import Head from "next/head";

const DOMAIN = "https://earthflex.dev";

export default function Meta({
    title = "earthflex.dev",
    description = "My name is Apiwat Anekboon.",
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
            <link rel="apple-touch-icon-precomposed" sizes="180x180"  href="/apple-touch-icon-precomposed.png" />

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
