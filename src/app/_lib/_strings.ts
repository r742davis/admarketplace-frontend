export function capitalize(words: string) {
	return words
		.split(" ")
		.map((word: string) => {
			return word[0].toUpperCase() + word.substring(1);
		})
		.join(" ");
}
