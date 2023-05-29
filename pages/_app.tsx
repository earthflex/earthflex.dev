import React from 'react';
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
              detect_on: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "repulse"
                },
                onHover: {
                  enable: true,
                  mode: "bubble"
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 250,
                  size: 0,
                  duration: 2,
                  opacity: 0,
                  speed: 3,
                },
                repulse: {
                  distance: 400,
                  duration: 0.4,
                },
                push: {
                  particles_nb : 4
                },
                remove: {
                  particles_nb : 4
                }
              }
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
                value: 80,
              },
              opacity: {
                value: 0.7,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0,
                  sync: false
                }
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 5
                },
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
