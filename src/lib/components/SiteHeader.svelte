<script lang="ts">
	import { resolve } from '$app/paths';

	let { name }: { name: string } = $props();
</script>

<header class="container">
	<a class="identity" href={resolve('/#about')} aria-label={`${name} — about`}>
		<span class="mark" aria-hidden="true"></span>
		<span>{name}<span class="name-period">.</span></span>
	</a>

	<nav aria-label="Main navigation">
		<a href={resolve('/#about')}><span class="eyebrow" aria-hidden="true">01</span> About</a>
		<a href={resolve('/#projects')}><span class="eyebrow" aria-hidden="true">02</span> Projects</a>
	</nav>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-5);
		min-height: 6.5rem;
		padding-block: var(--space-5);
		border-bottom: 1px solid var(--color-border);
	}

	.identity {
		display: inline-flex;
		align-items: center;
		gap: var(--space-4);
		min-height: 2.75rem;
		font-size: 0.9375rem;
		font-weight: 500;
		text-decoration: none;
	}

	.mark {
		flex-shrink: 0;
		width: 1.125rem;
		height: 1.125rem;
		background: var(--color-text);
		box-shadow: var(--shadow-offset);
	}

	.name-period {
		color: var(--color-text-muted);
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
			gap: var(--space-4);
			min-height: 5.5rem;
		}

		nav {
			gap: var(--space-4);
		}

		nav .eyebrow {
			display: none;
		}
	}
</style>
