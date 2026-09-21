<script lang="ts">
	import { resolve } from '$app/paths';
	import type { LocalizedProject } from '$lib/content';

	let { project, technologiesLabel }: { project: LocalizedProject; technologiesLabel: string } =
		$props();
</script>

<article aria-labelledby={`${project.id}-title`}>
	<a
		class="card-link"
		href={resolve('/projects/[id]', { id: project.id })}
		aria-labelledby={`${project.id}-title`}
	>
		<h3 id={`${project.id}-title`}>
			<span class="project-title">{project.title}</span>
			<span class="project-arrow" aria-hidden="true">↗</span>
		</h3>
		<p class="description">{project.description}</p>
		<ul aria-label={technologiesLabel}>
			{#each project.technologies as technology (technology)}
				<li>{technology}</li>
			{/each}
		</ul>
	</a>
</article>

<style>
	article {
		height: 100%;
		min-width: 0;
		border: 1px solid var(--color-border);
		background: var(--color-surface);
		box-shadow: var(--shadow-offset);
		overflow-wrap: anywhere;
	}

	.card-link {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: clamp(1.5rem, 3vw, 2rem);
		text-decoration: none;
	}

	.card-link:hover h3 {
		border-color: var(--color-bright);
	}

	.project-number {
		margin-bottom: var(--space-6);
	}

	h3 {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: var(--space-4);
		border-bottom: 1px dotted transparent;
		font-size: 1.5rem;
		line-height: 1.25;
		letter-spacing: -0.035em;
	}

	.project-title {
		min-width: 0;
	}

	.project-arrow {
		flex: none;
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
		font-weight: 600;
		font-size: 0.625rem;
		line-height: 1.5;
		color: var(--color-text-muted);
	}
</style>
