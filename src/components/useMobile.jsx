import { useEffect } from "react";
import { useState } from "react";

const getIsMobile = () => window.innerWidth <= 450.98;

export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState(getIsMobile());

    useEffect(() => {
        const onResize = () => {
            setIsMobile(getIsMobile());
        }

        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);

    return isMobile;
}