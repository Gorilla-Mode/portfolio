<script lang="ts">
	import type { Project } from '$lib/content';

	let { project, number }: { project: Project; number: number } = $props();
</script>

<article aria-labelledby={`${project.id}-title`}>
	<p class="eyebrow project-number">{String(number).padStart(2, '0')}</p>
	<h3 id={`${project.id}-title`}>
		{#if project.href}
			<a href={project.href} rel="external">{project.title}<span aria-hidden="true"> ↗</span></a>
		{:else}
			{project.title}
		{/if}
	</h3>
	<p class="description">{project.description}</p>
	<ul aria-label="Technologies">
		{#each project.technologies as technology (technology)}
			<li>{technology}</li>
		{/each}
	</ul>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		height: 100%;
		min-width: 0;
		padding: clamp(1.5rem, 3vw, 2rem);
		border: 1px solid var(--color-border);
		background: var(--color-surface);
		box-shadow: var(--shadow-offset);
		overflow-wrap: anywhere;
	}

	.project-number {
		margin-bottom: var(--space-6);
	}

	h3 {
		font-size: 1.5rem;
		line-height: 1.25;
		letter-spacing: -0.035em;
	}

	h3 a {
		text-decoration: none;
	}

	h3 a:hover,
	h3 a:focus-visible {
		text-decoration: underline;
	}

	h3 a span {
		font-size: 1rem;
		color: var(--color-text-muted);
	}

	.description {
		margin-top: var(--space-4);
		margin-bottom: var(--space-6);
		font-size: 0.875rem;
		line-height: 1.8;
		color: var(--color-text-muted);
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		margin: auto 0 0;
		padding: 0;
		list-style: none;
	}

	li {
		padding: var(--space-1) var(--space-2);
		border: 1px solid var(--color-border);
		font-family: var(--font-mono);
		font-size: 0.625rem;
		line-height: 1.5;
		color: var(--color-text-muted);
	}
</style>
