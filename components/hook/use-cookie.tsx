import { useState, useEffect } from 'react';
import { formatTimeRemaining } from "@/lib/format";

type UseCookiesAcceptedReturnType = {
    cookiesAccepted: boolean;
    setCookiesAccepted: (value: boolean) => void;
    notNowAccepted: boolean;
    setNotNowAccepted: (value: boolean) => void;
};

export const useCookiesAccepted = (): UseCookiesAcceptedReturnType => {

    const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(false);
    const [notNowAccepted, setNotNowAccepted] = useState<boolean>(false);

    useEffect(() => {

        const storedAcceptance = localStorage.getItem("cookiesAccepted");
        const storedExpiration = localStorage.getItem("cookiesAcceptedExpiration");
        const currentTime = new Date().getTime();

        const storedNotNow = sessionStorage.getItem("notNowAccepted");

        if (storedExpiration && currentTime > parseInt(storedExpiration)) {
            localStorage.removeItem("cookiesAccepted");
            localStorage.removeItem("cookiesAcceptedExpiration");
            setCookiesAccepted(false);
        } else if (storedAcceptance === "true") {
            setCookiesAccepted(true);
        }

        if (storedNotNow === "true") {
            setNotNowAccepted(true);
        }

    }, []);

    useEffect(() => {
        const bodyElement = document.body;
        if (cookiesAccepted || notNowAccepted) {
            bodyElement.classList.remove("cookie-body");
        } else {
            bodyElement.classList.add("cookie-body");
        }
        return () => {
            bodyElement.classList.remove("cookie-body");
        };

    }, [cookiesAccepted, notNowAccepted]);

    useEffect(() => {
        const expirationTime = localStorage.getItem("cookiesAcceptedExpiration");

        if (cookiesAccepted && expirationTime) {
            const timeRemaining = parseInt(expirationTime) - new Date().getTime();
            console.log(formatTimeRemaining(timeRemaining));
        }
    }, [cookiesAccepted]);

    return { cookiesAccepted, setCookiesAccepted, notNowAccepted, setNotNowAccepted };
};
