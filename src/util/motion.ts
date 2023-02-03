export const slideIn = (
    direction: string,
    type: string,
    delay?: number,
    duration?: number
) => ({
    hidden: {
        x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
        y: direction === "up" ? 50 : direction === "down" ? -20 : 0,
        opacity: 0,
    },
    visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            stiffness: 40,
        },
    },
});
const motionContainer = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};
const motionContainerRev = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1,
        },
    },
};

const motionItem = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: "30",
        },
    },
};

export { motionItem, motionContainer, motionContainerRev };
