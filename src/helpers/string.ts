export function toSentenceCase(str: string): string {
	return str
		.split('. ')
		.map(sentence => `${sentence[0].toUpperCase()}${sentence.substring(1)}`)
		.join('. ');
}
