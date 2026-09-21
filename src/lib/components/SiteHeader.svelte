<script lang="ts">
	import { resolve } from '$app/paths';
	import { ui } from '$lib/i18n';
	import LanguageButton from './LanguageButton.svelte';

	let { name, copy }: { name: string; copy: (typeof ui)['en'] } = $props();
</script>

<header class="container">
	<a class="identity" href={resolve('/#about')} aria-label={copy.identityAbout(name)}>
		<span class="mark" aria-hidden="true"></span>
		<span>{name}</span>
	</a>

	<div class="header-actions">
		<nav aria-label={copy.mainNavigation}>
			<a href={resolve('/#about')}>{copy.about}</a>
			<a href={resolve('/#projects')}>{copy.projects}</a>
			<a href={resolve('/#interests')}>{copy.interests}</a>
		</nav>
		<LanguageButton />
	</div>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-5);
		min-height: var(--header-min-height);
		padding-block: var(--header-padding);
		border-bottom: 1px solid var(--color-border);
	}

	.identity {
		display: inline-flex;
		align-items: center;
		gap: var(--space-4);
		min-height: 2.75rem;
		color: var(--color-bright);
		font-size: 0.9375rem;
		font-weight: 500;
		text-decoration: none;
	}

	.mark {
		flex-shrink: 0;
		width: 1.125rem;
		height: 1.125rem;
		background: var(--color-bright);
		box-shadow: var(--shadow-offset);
	}

	.header-actions {
		display: flex;
		align-items: center;
		gap: var(--space-6);
	}

	nav {
		display: flex;
		gap: var(--space-6);
	}

	nav a {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		min-height: 2.75rem;
		font-size: 0.8125rem;
		color: var(--color-text-muted);
		text-decoration: none;
	}

	nav a:hover,
	nav a:focus-visible {
		color: var(--color-text);
	}

	@media (max-width: 30rem) {
		header {
			gap: var(--space-2);
		}

		.identity {
			min-width: 0;
		}

		.identity span:last-child {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.header-actions {
			flex-shrink: 0;
			gap: var(--space-3);
		}

		nav {
			gap: var(--space-3);
		}
	}
</style>
