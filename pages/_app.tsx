import React from 'react';
import type { AppProps } from 'next/app'
import { Provider as RWBProvider } from "react-wrap-balancer";
import { Analytics } from "@vercel/analytics/react";
import '@/styles/globals.css'
import '@/styles/main.css'
import '@/styles/responsive.css'
import localFont from '@next/font/local'
import { motion, AnimatePresence } from "framer-motion";
import SmoothScroll from '@/components/shared/smooth-scroll';

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
  return (
    <RWBProvider>
      <div className={clashdisplay.className} >
        <div className="grain-animation"></div>
        <AnimatePresence >
          <motion.div>
            <Component {...pageProps} />
            <SmoothScroll />
          </motion.div>
        </AnimatePresence>
      </div>
      <Analytics />
    </RWBProvider>
  )
}
