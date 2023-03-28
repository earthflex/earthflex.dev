import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

const clashDisplay = fetch(
  new URL("../../styles/fonts/clashdisplay/fonts/ClashDisplay-Semibold.ttf", import.meta.url),
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  try {
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
            src={new URL("../../public/logo.png", import.meta.url).toString()}
            alt="earthflex"
          />
          <h1
            style={{
              fontSize: "100px",
              fontFamily: "clashDisplay",
              background:
                "linear-gradient(to bottom right, #000000 21.66%, #78716c 86.47%)",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: "5rem",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h1>
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
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }

}
