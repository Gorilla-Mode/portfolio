<script lang="ts">
	import { resolve } from '$app/paths';
	import type { LocalizedProject } from '$lib/content';
	import { ui } from '$lib/i18n';
	import LanguageButton from './LanguageButton.svelte';

	let { project, copy }: { project: LocalizedProject; copy: (typeof ui)['en'] } = $props();
</script>

<article class="project-detail" aria-labelledby="project-title">
	<div class="top-row">
		<a class="back-link" href={resolve('/#projects')}>
			<span aria-hidden="true">←</span>
			{copy.allProjects}
		</a>
		<LanguageButton />
	</div>

	<header class="project-heading">
		<h1 id="project-title">{project.title}</h1>
		<p class="summary">{project.description}</p>
	</header>

	<figure class="project-image">
		{#if project.image}
			<img src={project.image.src} alt={project.image.alt} />
		{:else}
			<p>{copy.projectImagePlaceholder}</p>
		{/if}
	</figure>

	<div class="project-body">
		<section aria-labelledby="about-project-heading">
			<h2 id="about-project-heading">{copy.aboutProject}</h2>
			{#if project.longDescription[0]}
				<p class="detail-paragraph first-description">{project.longDescription[0]}</p>
			{/if}
			{#if project.longDescription.length > 1}
				<div class="remaining-description">
					{#each project.longDescription.slice(1) as paragraph, index (index)}
						<p class="detail-paragraph">{paragraph}</p>
					{/each}
				</div>
			{/if}
		</section>

		<aside aria-label={copy.projectDetails}>
			<h2 class="eyebrow">{copy.technologies}</h2>
			<div class="metadata-middle">
				<ul class="technologies">
					{#each project.technologies as technology (technology)}
						<li>{technology}</li>
					{/each}
				</ul>
				<h2 class="eyebrow">{copy.links}</h2>
			</div>
			<div class="links-list">
				{#if project.github}
					<a href={project.github} rel="external">
						{copy.viewOnGithub} <span aria-hidden="true">↗</span>
					</a>
				{:else}
					<p class="link-placeholder">{copy.githubPlaceholder}</p>
				{/if}
				{#if project.href}
					<a href={project.href} rel="external">
						{copy.visitProject} <span aria-hidden="true">↗</span>
					</a>
				{/if}
			</div>
		</aside>
	</div>
</article>

<style>
	.project-detail {
		padding-bottom: var(--space-9);
	}

	.top-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-4);
		min-height: 6.5rem;
		padding-block: var(--space-5);
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
	}

	.project-heading {
		max-width: 48rem;
		padding-block: var(--space-5) var(--space-7);
	}

	h1 {
		font-size: clamp(3rem, 8vw, 5.5rem);
		line-height: 1.05;
		letter-spacing: -0.07em;
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
		grid-template-rows: repeat(3, auto);
		column-gap: var(--space-8);
		row-gap: var(--space-4);
		padding-top: var(--space-8);
	}

	.project-body > section,
	.project-body > aside {
		display: grid;
		grid-template-rows: subgrid;
		grid-row: 1 / span 3;
		row-gap: var(--space-4);
	}

	.project-body > section {
		grid-column: 1;
		max-width: 40rem;
	}

	.project-body > aside {
		grid-column: 2;
	}

	.project-body section h2 {
		grid-row: 1;
		font-size: clamp(1.75rem, 3vw, 2.25rem);
		line-height: 1.2;
		letter-spacing: -0.04em;
	}

	.detail-paragraph {
		color: var(--color-text-muted);
	}

	.first-description {
		grid-row: 2;
	}

	.remaining-description {
		grid-row: 3;
	}

	.remaining-description .detail-paragraph + .detail-paragraph {
		margin-top: var(--space-5);
	}

	.metadata-middle {
		display: flex;
		grid-row: 2;
		flex-direction: column;
		justify-content: space-between;
		gap: var(--space-5);
	}

	.project-body aside h2 {
		font-family: var(--font-sans);
	}

	.project-body aside > h2 {
		grid-row: 1;
		align-self: end;
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
		font-weight: 600;
		font-size: 0.625rem;
		line-height: 1.5;
		color: var(--color-text-muted);
	}

	.links-list {
		display: grid;
		grid-row: 3;
		align-content: start;
	}

	.links-list a,
	.link-placeholder {
		display: block;
		font-size: 1rem;
		line-height: 1.6;
	}

	.links-list a {
		text-decoration: none;
	}

	.link-placeholder {
		color: var(--color-text-muted);
	}

	@media (max-width: 40rem) {
		.project-body {
			grid-template-columns: minmax(0, 1fr);
			grid-template-rows: auto;
			gap: var(--space-7);
		}

		.project-body > section,
		.project-body > aside {
			display: block;
			grid-column: auto;
			grid-row: auto;
		}

		.first-description,
		.remaining-description {
			margin-top: var(--space-5);
		}

		.project-body aside > h2 {
			margin-bottom: var(--space-4);
		}

		.metadata-middle {
			display: block;
		}

		.metadata-middle h2 {
			margin-top: var(--space-7);
		}

		.links-list {
			margin-top: var(--space-4);
		}
	}

	@media (max-width: 30rem) {
		.top-row {
			min-height: 5.5rem;
		}
	}
</style>
