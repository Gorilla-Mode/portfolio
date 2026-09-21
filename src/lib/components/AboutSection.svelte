<script lang="ts">
	import type { LocalizedProfile } from '$lib/content';
	import PortraitImage from './PortraitImage.svelte';

	let {
		name,
		role,
		bio,
		image,
		github,
		linkedin,
		exploreProjects,
		profileImagePlaceholder,
		githubPlaceholder,
		linkedinPlaceholder
	}: LocalizedProfile & {
		exploreProjects: string;
		profileImagePlaceholder: string;
		githubPlaceholder: string;
		linkedinPlaceholder: string;
	} = $props();
</script>

<section id="about" aria-labelledby="about-heading">
	<div class="about-copy">
		<h1 id="about-heading">{name}</h1>
		<p class="role">{role}</p>
		<p class="bio drop-cap">{bio}</p>
		<ul class="social-links" aria-label="Social links">
			<li>
				{#if github}
					<a href={github} rel="external">GitHub <span aria-hidden="true">↗</span></a>
				{:else}
					<span class="social-placeholder">{githubPlaceholder}</span>
				{/if}
			</li>
			<li>
				{#if linkedin}
					<a href={linkedin} rel="external">LinkedIn <span aria-hidden="true">↗</span></a>
				{:else}
					<span class="social-placeholder">{linkedinPlaceholder}</span>
				{/if}
			</li>
		</ul>
		<a class="projects-link" href="#projects">
			{exploreProjects}
			<span aria-hidden="true">↓</span>
		</a>
	</div>

	<div class="portrait">
		<PortraitImage {image} placeholder={profileImagePlaceholder} height="50vh" />
	</div>
</section>

<style>
	section {
		display: grid;
		grid-template-areas: 'copy portrait';
		grid-template-columns: minmax(0, 1fr) minmax(12rem, 18rem);
		align-items: center;
		gap: clamp(var(--space-6), 7vw, var(--space-8));
		padding-top: clamp(2rem, 4.5vw, 3.5rem);
		padding-bottom: clamp(4rem, 8vw, 6rem);
	}

	.about-copy {
		grid-area: copy;
		min-width: 0;
	}

	.portrait {
		grid-area: portrait;
		min-width: 0;
		width: 100%;
		max-width: 18rem;
		justify-self: end;
	}

	.portrait :global(.portrait-image) {
		max-width: 100%;
	}

	h1 {
		margin-top: var(--space-6);
		font-size: clamp(3.75rem, 10vw, 7rem);
		font-weight: 500;
		line-height: 1.04;
		letter-spacing: -0.065em;
		overflow-wrap: anywhere;
	}

	h1 span {
		color: var(--color-text-muted);
	}

	.role {
		margin-top: var(--space-5);
		font-size: clamp(1.125rem, 2.5vw, 1.5rem);
		line-height: 1.4;
		letter-spacing: -0.025em;
	}

	.bio {
		max-width: 34rem;
		margin-top: var(--space-5);
		font-size: 1rem;
		line-height: 1.8;
		color: var(--color-text-muted);
	}

	.social-links {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3) var(--space-5);
		margin: var(--space-5) 0 0;
		padding: 0;
		list-style: none;
		font-size: 0.8125rem;
	}

	.social-links a {
		display: inline-flex;
		align-items: baseline;
		gap: var(--space-1);
		color: var(--color-text-muted);
		text-decoration: none;
	}

	.social-links a:hover,
	.social-links a:focus-visible {
		color: var(--color-text);
	}

	.social-placeholder {
		color: var(--color-text-muted);
	}

	.projects-link {
		display: inline-flex;
		align-items: center;
		gap: var(--space-5);
		min-height: 2.75rem;
		margin-top: var(--space-6);
		font-size: 0.8125rem;
		text-decoration: none;
	}
	a {
		color: var(--color-text-muted);
	}

	a:hover {
		color: var(--color-text);
	}

	@media (max-width: 40rem) {
		section {
			grid-template-areas:
				'portrait'
				'copy';
			grid-template-columns: minmax(0, 1fr);
			gap: var(--space-6);
		}

		.portrait {
			width: min(70vw, 16rem);
			justify-self: center;
		}
	}
</style>
