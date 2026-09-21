<script lang="ts">
	import '../app.css';
	import { Dithering } from '@devmischief/shaders-svelte';
	import { setContext, type Snippet } from 'svelte';
	import { localeContextKey, type Locale, type LocaleContext } from '$lib/i18n';
	import type { LayoutData } from './$types';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
	let locale = $derived<Locale>(data.locale);

	setContext<LocaleContext>(localeContextKey, {
		get locale() {
			return locale;
		},
		switchLanguage() {
			locale = locale === 'en' ? 'nb' : 'en';
			document.documentElement.lang = locale;
			document.cookie = `portfolio_lang=${locale}; Max-Age=31536000; Path=/; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`;
		}
	});

	function randomBetween(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
</script>

<div class="background" aria-hidden="true">
	<Dithering
		width={2560}
		height={1440}
		colorBack="#121212"
		colorFront="#341313"
		shape="warp"
		type="4x4"
		size={1.8}
		speed={0.025}
		scale={8}
		rotation={randomBetween(0, 180)}
		offsetX={randomBetween(0, 10)}
		offsetY={randomBetween(0, 10)}
		fit="contain"
	/>
</div>

<div class="content">
	{@render children()}
</div>

<style>
	.background {
		position: fixed;
		width: 100dvw;
		height: 100dvh;
		inset: 0;
		z-index: 0;
		pointer-events: none;
	}

	.content {
		position: relative;
		z-index: 1;
	}
</style>
