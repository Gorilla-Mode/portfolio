<script lang="ts">
	import { getLocaleContext, ui } from '$lib/i18n';

	const language = getLocaleContext();
	let copy = $derived(ui[language.locale]);
</script>

<button type="button" aria-label={copy.switchLabel} onclick={language.switchLanguage}>
	{language.locale === 'en' ? 'NOR' : 'ENG'}
</button>

<style>
	button {
		flex: none;
		min-height: 2.75rem;
		padding: 0;
		border: 0;
		background: none;
		color: var(--color-bright);
		font-size: 0.8125rem;
		text-decoration: none;
		cursor: pointer;
	}

	button:hover,
	button:focus-visible {
		color: var(--color-text);
		text-decoration: underline dotted;
		text-underline-offset: 0.3em;
	}
</style>
