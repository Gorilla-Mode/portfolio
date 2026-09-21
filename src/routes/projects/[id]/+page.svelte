<script lang="ts">
	import ProjectDetail from '$lib/components/ProjectDetail.svelte';
	import { localizeProject, profile } from '$lib/content';
	import { getLocaleContext, ui } from '$lib/i18n';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const language = getLocaleContext();
	let copy = $derived(ui[language.locale]);
	let project = $derived(localizeProject(data.project, language.locale));
</script>

<svelte:head>
	<title>{project.title} — {profile.name}</title>
	<meta name="description" content={project.description} />
</svelte:head>

<a class="skip-link" href="#main-content">{copy.skipToContent}</a>

<main id="main-content" class="container" tabindex="-1">
	<ProjectDetail {project} {copy} />
</main>
