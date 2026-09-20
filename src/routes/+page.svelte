<script lang="ts">
	import AboutSection from '$lib/components/AboutSection.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import { profile, projects } from '$lib/content';
</script>

<svelte:head>
	<title>{profile.name} — Portfolio</title>
	<meta name="description" content={`About and selected projects by ${profile.name}.`} />
</svelte:head>

<a class="skip-link" href="#main-content">Skip to content</a>
<SiteHeader name={profile.name} />

<main id="main-content" class="container" tabindex="-1">
	<AboutSection {...profile} />
	<ProjectsSection {projects} />
</main>

<footer class="container">
	<p>{profile.name}<span>.</span></p>
	<a href="#about">Back to top <span aria-hidden="true">↑</span></a>
</footer>

<style>
	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-5);
		padding-block: var(--space-5) var(--space-7);
		border-top: 1px solid var(--color-border);
		font-size: 0.75rem;
		color: var(--color-text-muted);
	}

	footer p span {
		color: var(--color-text);
	}

	footer a {
		display: inline-flex;
		align-items: center;
		gap: var(--space-4);
		min-height: 2.75rem;
		color: var(--color-text-muted);
		text-decoration: none;
	}

	footer a:hover,
	footer a:focus-visible {
		color: var(--color-text);
	}
</style>
