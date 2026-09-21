export type Locale = 'en' | 'nb';

export function preferredLocale(acceptLanguage: string | null): Locale {
	const preferences = (acceptLanguage ?? '')
		.split(',')
		.map((entry) => {
			const [tag, ...parameters] = entry.trim().split(';');
			const quality = parameters.find((parameter) => parameter.trim().startsWith('q='));
			return { tag: tag.toLowerCase(), weight: quality ? Number(quality.trim().slice(2)) : 1 };
		})
		.filter(({ weight }) => weight > 0 && weight <= 1)
		.sort((a, b) => b.weight - a.weight);

	for (const { tag } of preferences) {
		if (/^(nb|nn|no)(-|$)/.test(tag)) return 'nb';
		if (/^en(-|$)/.test(tag)) return 'en';
	}

	return 'en';
}
