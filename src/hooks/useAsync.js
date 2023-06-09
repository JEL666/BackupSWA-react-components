import { useEffect } from "react";
import useAsyncFn from "./useAsyncFn";

export default function useAsync(fn, deps) {
    const [state, callback] = useAsyncFn(fn, deps);

    useEffect(() => {
        callback();
    }, [callback]);

    return state;
}