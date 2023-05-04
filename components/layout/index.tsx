import { ReactNode } from "react";
import Dock from "../shared/dock/dock";
import Header from "../shared/header";
import Meta from "./meta";
import React from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function Layout({
    meta,
    children,
}: {
    meta?: {
        title?: string;
        description?: string;
        author?: string;
        keyword?: string;
        image?: string;
    };
    children: ReactNode;
}) {

    const particlesInit = React.useCallback(async (engine: Engine) => {
        console.log(engine);
        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = React.useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <>
            <Meta {...meta} />
            <Header />
            <Dock />
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
            <main>
                {children}
            </main>
        </>
    );
}
