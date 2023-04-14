import {useEffect, useState} from "react";
import {useWindowSize} from "react-use";

const useScreenResize = () => {
    const [screen, setScreen] = useState<number>(0)
    const {width} = useWindowSize()

    useEffect(() => {
        setScreen(width)
    }, [width])

    return screen;
}

export default useScreenResize;