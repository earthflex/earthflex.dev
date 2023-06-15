import { ImageResponse } from '@vercel/og'
import { NextRequest } from "next/server";

export const config = {
    runtime: 'edge',
}

const clashDisplay = fetch(
    new URL("../../styles/fonts/clashdisplay/fonts/ClashDisplay-Semibold.ttf", import.meta.url),
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {

    const [clashDisplayData] = await Promise.all([clashDisplay]);

    const { searchParams } = req.nextUrl;
    const title = searchParams.get("title") || "Earthflex";

    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    backgroundImage:
                        "linear-gradient(to bottom right, #E0E7FF 25%, #ffffff 50%, #CFFAFE 75%)",
                }}
            >
                <img
                    src={new URL("../../public/logo.webp", import.meta.url).toString()}
                    alt="earthflex"
                />
                <div
                    style={{
                        fontSize: "80px",
                        marginTop: "10px",
                        background:
                            "linear-gradient(to bottom right, #000000 21.66%, #78716c 86.47%)",
                        backgroundClip: "text",
                        color: "transparent",
                        lineHeight: "5rem",
                        letterSpacing: "-0.02em",
                    }}
                >
                    {title}
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: "clashDisplay",
                    data: clashDisplayData,
                },
            ],
        }
    )
}