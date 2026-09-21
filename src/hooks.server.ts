import type { Handle } from '@sveltejs/kit';
import { preferredLocale } from '$lib/locale';

export const handle: Handle = async ({ event, resolve }) => {
	const saved = event.cookies.get('portfolio_lang');
	event.locals.locale =
		saved === 'en' || saved === 'nb'
			? saved
			: preferredLocale(event.request.headers.get('accept-language'));

	return resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('<html lang="en">', `<html lang="${event.locals.locale}">`)
	});
};
