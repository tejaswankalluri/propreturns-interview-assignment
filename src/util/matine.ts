export const slideIn = (
    direction: string,
    type: string,
    delay: number,
    duration: number
) => ({
    hidden: {
        x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
        y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
        opacity: 0,
    },
    visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            stiffness: 40,
        },
    },
});
