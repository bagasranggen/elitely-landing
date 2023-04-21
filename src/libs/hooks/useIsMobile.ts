import {useEffect, useState} from "react";

import {BREAKPOINTS} from "@/data/global";
import type {BreakpointsProps} from "@/@type/common";
import {useScreenResize} from "@/libs/hooks/index";

const useIsMobile = (size: BreakpointsProps) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const screen = useScreenResize();

    useEffect(() => {
        setIsMobile(screen >= BREAKPOINTS.MIN[size]);
    }, [screen, size])

    return !isMobile;
}

export default useIsMobile;