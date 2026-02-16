import { useEffect, useRef } from 'react';

const useScrollTransform = (direction = 'left', multiplier = 0.15) => {
    const elementRef = useRef(null);
    const currentTransform = useRef(0);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // Optimization: promote to own layer
        element.style.willChange = 'transform';

        // Initialize position logic
        const getTargetValue = () => {
            const rect = element.getBoundingClientRect();
            // rect.top is relatively stable for translateX only transforms
            const elementCenterY = rect.top + rect.height / 2;
            const viewportCenterY = window.innerHeight / 2;
            const difference = elementCenterY - viewportCenterY;

            let target = difference * multiplier;
            if (direction === 'right') target = -target;
            return target;
        };

        // Set initial value to avoid jump on load
        currentTransform.current = getTargetValue();
        element.style.transform = `translateX(${currentTransform.current}px)`;

        let animationFrameId;

        const loop = () => {
            const targetValue = getTargetValue();

            // Linear Interpolation (Lerp)
            // The factor 0.08 determines the "viscosity" or "smoothness". 
            // Lower = more lag/smoother, Higher = snappier.
            currentTransform.current += (targetValue - currentTransform.current) * 0.08;

            // Round to 2 decimal places to avoid sub-pixel rendering jitter in some browsers
            const appliedValue = Math.round(currentTransform.current * 100) / 100;

            element.style.transform = `translateX(${appliedValue}px)`;

            animationFrameId = requestAnimationFrame(loop);
        };

        // Start the animation loop
        loop();

        return () => {
            cancelAnimationFrame(animationFrameId);
            if (element) {
                element.style.willChange = 'auto';
            }
        };
    }, [direction, multiplier]);

    return elementRef;
};

export default useScrollTransform;
