import React, { ReactNode } from 'react';
import type { AppProps } from 'next/app'
import { Provider as RWBProvider } from "react-wrap-balancer";
import { Analytics } from "@vercel/analytics/react";
import '@/styles/globals.css'
import '@/styles/main.css'
import '@/styles/responsive.css'
import localFont from '@next/font/local'
import { motion, AnimatePresence } from "framer-motion";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { DataContext } from '@/context';

const clashdisplay = localFont({
  src: [
    {
      path: '../styles/fonts/clashdisplay/fonts/ClashDisplay-Variable.woff2',
      weight: '200 700',
      style: 'normal',
    },
  ],
})

export default function App({ Component, pageProps }: AppProps) {

  const particlesInit = React.useCallback(async (engine: Engine) => {
    // console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = React.useCallback(async (container: Container | undefined) => {
    // await console.log(container);
  }, []);

  return (
    <RWBProvider>
      <div className={clashdisplay.className} >
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                },
                onHover: {
                  enable: false,
                },
                resize: true,
              },
            },
            particles: {
              color: {
                value: ["rgb(255, 255, 255)"],
              },
              links: {
                enable: false,
              },
              collisions: {
                enable: false,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "out",
                },
                random: true,
                speed: 0.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 50,
              },
              opacity: {
                value: 0.7,
                random: true,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
                random: true,
              },
            },
            detectRetina: true,
          }}
        />
        <div className="wrapper-main">
          <div className="grain-animation"></div>
          <AnimatePresence>
            <motion.div
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <Analytics />
    </RWBProvider>
  )
}
