<script lang="ts">
	import AboutSection from '$lib/components/AboutSection.svelte';
	import InterestsSection from '$lib/components/InterestsSection.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import {
		interests,
		localizeInterest,
		localizeProfile,
		localizeProject,
		profile,
		projects
	} from '$lib/content';
	import { getLocaleContext, ui } from '$lib/i18n';

	const language = getLocaleContext();
	let copy = $derived(ui[language.locale]);
	let localizedProfile = $derived(localizeProfile(language.locale));
	let localizedProjects = $derived(
		projects.map((project) => localizeProject(project, language.locale))
	);
	let localizedInterests = $derived(
		interests.map((interest) => localizeInterest(interest, language.locale))
	);
</script>

<svelte:head>
	<title>{profile.name} — {copy.portfolio}</title>
	<meta name="description" content={copy.pageDescription(profile.name)} />
</svelte:head>

<a class="skip-link" href="#main-content">{copy.skipToContent}</a>
<SiteHeader name={profile.name} {copy} />

<main id="main-content" class="container" tabindex="-1">
	<AboutSection
		{...localizedProfile}
		exploreProjects={copy.exploreProjects}
		profileImagePlaceholder={copy.profileImagePlaceholder}
		githubPlaceholder={copy.githubPlaceholder}
		linkedinPlaceholder={copy.linkedinPlaceholder}
	/>
	<ProjectsSection projects={localizedProjects} {copy} />
	<InterestsSection interests={localizedInterests} {copy} />
</main>

<footer class="container">
	<p>{profile.name}<span>.</span></p>
	<a href="#about">{copy.backToTop} <span aria-hidden="true">↑</span></a>
</footer>

<style>
	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-5);
		padding-block: var(--space-5);
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
