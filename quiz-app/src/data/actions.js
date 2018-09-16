
export const increaseRoundNumber = () => {
    return {
        type: "increaseRoundNumber",
    };
};

export const increaseScore = (points) => {
    return {
        type: "increaseScore",
        points: points,
    };
};