<script lang="ts">
	import type { LocalizedProject } from '$lib/content';
	import { ui } from '$lib/i18n';
	import ProjectCard from './ProjectCard.svelte';

	let { projects, copy }: { projects: LocalizedProject[]; copy: (typeof ui)['en'] } = $props();
</script>

<section id="projects" aria-labelledby="projects-heading">
	<div class="section-heading">
		<div>
			<h2 id="projects-heading">{copy.selectedWork}</h2>
		</div>
	</div>

	<ul class="project-grid" aria-label={copy.selectedProjects}>
		{#each projects as project (project.id)}
			<li><ProjectCard {project} technologiesLabel={copy.technologies} /></li>
		{/each}
	</ul>
</section>

<style>
	section {
		padding-block: var(--section-padding-start) var(--section-padding-end);
		border-top: 1px solid var(--color-border);
	}

	.section-heading {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: var(--space-5);
		margin-bottom: var(--section-heading-gap);
	}

	h2 {
		font-size: clamp(2rem, 4vw, 2.75rem);
		line-height: 1.15;
		letter-spacing: -0.05em;
	}

	h2 span {
		color: var(--color-text-muted);
	}

	.section-note {
		max-width: 12rem;
		font-size: 0.75rem;
		line-height: 1.7;
		color: var(--color-text-muted);
	}

	.project-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: var(--content-gap);
		margin: 0;
		padding: 0 var(--offset) var(--offset) 0;
		list-style: none;
	}

	.project-grid > li {
		min-width: 0;
	}

	@media (max-width: 40rem) {
		.section-heading {
			align-items: start;
			flex-direction: column;
		}

		.section-note {
			max-width: none;
		}

		.project-grid {
			grid-template-columns: minmax(0, 1fr);
		}
	}
</style>
