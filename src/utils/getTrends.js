export const getTrends = (text) => {
    return text.match(/#\w+/g);
}