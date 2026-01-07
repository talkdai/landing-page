import { useCallback, useState } from "react";

type Size = {
    width: number;
    height: number;
};

export function useElementSize<T extends HTMLElement>() {
    const [size, setSize] = useState<Size>({ width: 0, height: 0 });

    const ref = useCallback((node: T | null) => {
        if (!node) return;

        const observer = new ResizeObserver(([entry]) => {
            const boxSize = entry.borderBoxSize?.[0];

            if (boxSize) {
                setSize({
                    width: boxSize.inlineSize,
                    height: boxSize.blockSize,
                });
                return;
            }

            const style = getComputedStyle(node);
            const paddingX =
                parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
            const paddingY =
                parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);

            setSize({
                width: entry.contentRect.width + paddingX,
                height: entry.contentRect.height + paddingY,
            });
        });

        observer.observe(node, { box: "border-box" });

        return () => observer.disconnect();
    }, []);

    return { ref, size };
}