<script lang="ts">
	import { onMount } from 'svelte';
	import type { LocalizedProject } from '$lib/content';

	let {
		image,
		video,
		label,
		placeholder
	}: {
		image?: LocalizedProject['image'];
		video?: string;
		label: string;
		placeholder: string;
	} = $props();

	let player: HTMLVideoElement | undefined = $state();
	let failed = $state(false);

	onMount(() => {
		const element = player;
		if (!element) return;

		const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
		const updatePlayback = () => {
			if (motion.matches) {
				element.pause();
			} else {
				// Autoplay may be blocked; native controls still allow manual playback.
				void element.play().catch(() => {});
			}
		};

		element.muted = true;
		updatePlayback();
		motion.addEventListener('change', updatePlayback);
		return () => {
			motion.removeEventListener('change', updatePlayback);
			element.pause();
		};
	});
</script>

<figure class="project-media">
	{#if video && !failed}
		<video
			bind:this={player}
			src={video}
			poster={image?.src}
			aria-label={label}
			muted
			loop
			playsinline
			controls
			preload="metadata"
			onerror={() => (failed = true)}
		></video>
	{:else if image}
		<img src={image.src} alt={image.alt} />
	{:else}
		<p>{placeholder}</p>
	{/if}
</figure>

<style>
	.project-media {
		margin: 0;
		border: 1px solid var(--color-border);
		background: var(--color-surface);
		box-shadow: var(--shadow-offset);
	}

	img,
	video,
	p {
		width: 100%;
	}

	img,
	video {
		display: block;
		height: auto;
	}

	p {
		display: flex;
		aspect-ratio: 16 / 9;
		align-items: center;
		justify-content: center;
		padding: var(--space-5);
		font-family: var(--font-mono);
		font-size: 0.75rem;
		text-align: center;
		color: var(--color-text-muted);
	}
</style>
