<script lang="ts">
	import type { Project } from '$lib/content';
	import ProjectCard from './ProjectCard.svelte';

	let { projects }: { projects: Project[] } = $props();
</script>

<section id="projects" aria-labelledby="projects-heading">
	<div class="section-heading">
		<div>
			<h2 id="projects-heading">Selected work<span>.</span></h2>
		</div>
	</div>

	<ul class="project-grid" aria-label="Selected projects">
		{#each projects as project, index (project.id)}
			<li><ProjectCard {project} number={index + 1} /></li>
		{/each}
	</ul>
</section>

<style>
	section {
		padding-top: var(--space-7);
		padding-bottom: var(--space-9);
		border-top: 1px solid var(--color-border);
	}

	.section-heading {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: var(--space-5);
		margin-bottom: var(--space-7);
	}

	h2 {
		margin-top: var(--space-4);
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
		gap: var(--space-6);
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
			margin-bottom: var(--space-6);
		}

		.section-note {
			max-width: none;
		}

		.project-grid {
			grid-template-columns: minmax(0, 1fr);
		}
	}
</style>
