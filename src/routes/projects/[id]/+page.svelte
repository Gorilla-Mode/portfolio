<script lang="ts">
	import ProjectDetail from '$lib/components/ProjectDetail.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import { profile } from '$lib/content';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.project.title} — {profile.name}</title>
	<meta name="description" content={data.project.description} />
</svelte:head>

<a class="skip-link" href="#main-content">Skip to content</a>
<SiteHeader name={profile.name} />

<main id="main-content" class="container" tabindex="-1">
	<ProjectDetail project={data.project} />
</main>
