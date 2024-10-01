export function capitalize(words) {
    return words
        .split(" ")
        .map(function (word) {
        return word[0].toUpperCase() + word.substring(1);
    })
        .join(" ");
}
