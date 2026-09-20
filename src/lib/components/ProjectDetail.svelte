<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Project } from '$lib/content';

	let { project }: { project: Project } = $props();
</script>

<article class="project-detail" aria-labelledby="project-title">
	<a class="back-link" href={resolve('/#projects')}>
		<span aria-hidden="true">←</span> All projects
	</a>

	<header class="project-heading">
		<p class="eyebrow">Selected work / Project details</p>
		<h1 id="project-title">{project.title}<span>.</span></h1>
		<p class="summary">{project.description}</p>
	</header>

	<figure class="project-image">
		{#if project.image}
			<img src={project.image.src} alt={project.image.alt} />
		{:else}
			<p>Project image to be added</p>
		{/if}
	</figure>

	<div class="project-body">
		<section aria-labelledby="about-project-heading">
			<p class="eyebrow">The story</p>
			<h2 id="about-project-heading">About the project</h2>
			{#each project.longDescription as paragraph, index (index)}
				<p class="detail-paragraph">{paragraph}</p>
			{/each}
		</section>

		<aside aria-label="Project details">
			<div class="detail-group">
				<h2 class="eyebrow">Technologies</h2>
				<ul class="technologies">
					{#each project.technologies as technology (technology)}
						<li>{technology}</li>
					{/each}
				</ul>
			</div>

			<div class="detail-group">
				<h2 class="eyebrow">Links</h2>
				{#if project.github}
					<a href={project.github} rel="external">
						View on GitHub <span aria-hidden="true">↗</span>
					</a>
				{:else}
					<p class="link-placeholder">GitHub link to be added</p>
				{/if}
				{#if project.href}
					<a href={project.href} rel="external">Visit project <span aria-hidden="true">↗</span></a>
				{/if}
			</div>
		</aside>
	</div>
</article>

<style>
	.project-detail {
		padding-block: var(--space-7) var(--space-9);
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		min-height: 2.75rem;
		font-size: 0.8125rem;
		color: var(--color-text-muted);
		text-decoration: none;
	}

	.back-link:hover,
	.back-link:focus-visible {
		color: var(--color-text);
		text-decoration: underline;
	}

	.project-heading {
		max-width: 48rem;
		padding-block: var(--space-8) var(--space-7);
	}

	h1 {
		margin-top: var(--space-4);
		font-size: clamp(3rem, 8vw, 5.5rem);
		line-height: 1.05;
		letter-spacing: -0.07em;
	}

	h1 span {
		color: var(--color-text-muted);
	}

	.summary {
		max-width: 42rem;
		margin-top: var(--space-6);
		font-size: clamp(1rem, 2vw, 1.25rem);
		line-height: 1.7;
		color: var(--color-text-muted);
	}

	.project-image {
		margin: 0;
		border: 1px solid var(--color-border);
		background: var(--color-surface);
		box-shadow: var(--shadow-offset);
	}

	.project-image img,
	.project-image p {
		width: 100%;
		aspect-ratio: 16 / 9;
	}

	.project-image img {
		display: block;
		object-fit: cover;
	}

	.project-image p {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--space-5);
		font-family: var(--font-mono);
		font-size: 0.75rem;
		text-align: center;
		color: var(--color-text-muted);
	}

	.project-body {
		display: grid;
		grid-template-columns: minmax(0, 2fr) minmax(12rem, 1fr);
		gap: var(--space-8);
		padding-top: var(--space-8);
	}

	.project-body section {
		max-width: 40rem;
	}

	.project-body section h2 {
		margin-block: var(--space-4) var(--space-6);
		font-size: clamp(1.75rem, 3vw, 2.25rem);
		line-height: 1.2;
		letter-spacing: -0.04em;
	}

	.detail-paragraph {
		margin-top: var(--space-5);
		color: var(--color-text-muted);
	}

	.detail-group + .detail-group {
		margin-top: var(--space-7);
	}

	.detail-group h2 {
		margin-bottom: var(--space-4);
	}

	.technologies {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.technologies li {
		padding: var(--space-1) var(--space-2);
		border: 1px solid var(--color-border);
		font-family: var(--font-mono);
		font-size: 0.625rem;
		line-height: 1.5;
		color: var(--color-text-muted);
	}

	.detail-group a,
	.link-placeholder {
		display: block;
		padding-block: var(--space-2);
		font-size: 0.875rem;
	}

	.detail-group a {
		text-decoration: none;
	}

	.detail-group a:hover,
	.detail-group a:focus-visible {
		text-decoration: underline;
	}

	.link-placeholder {
		color: var(--color-text-muted);
	}

	@media (max-width: 40rem) {
		.project-heading {
			padding-block: var(--space-7);
		}

		.project-body {
			grid-template-columns: minmax(0, 1fr);
			gap: var(--space-7);
		}
	}
</style>
