<script lang="ts">
	type Portrait = { src: string; alt: string };
	type Shape = 'rounded' | 'pointed';

	let {
		image,
		placeholder,
		shape = 'rounded',
		width,
		height
	}: {
		image?: Portrait;
		placeholder: string;
		shape?: Shape;
		width?: string;
		height?: string;
	} = $props();

	const componentId = $props.id();
	const clipId = `${componentId}-portrait-clip`;
	let frameWidth = $state(0);
	let frameHeight = $state(0);
	let frameRatio = $derived(frameWidth > 0 && frameHeight > 0 ? frameWidth / frameHeight : 2 / 3);
	let portraitPath = $derived.by(() => {
		if (shape === 'pointed') {
			const depth = Math.min(frameRatio * 0.75, 1);

			return `M .5 0 C .18 ${depth * 0.24} 0 ${depth * 0.6} 0 ${depth} V 1 H 1 V ${depth} C 1 ${depth * 0.6} .82 ${depth * 0.24} .5 0 Z`;
		}

		const depth = Math.min(frameRatio * 0.5, 1);

		return `M .5 0 A .5 ${depth} 0 0 1 1 ${depth} V 1 H 0 V ${depth} A .5 ${depth} 0 0 1 .5 0 Z`;
	});
</script>

<figure
	class="portrait-image"
	style:width
	style:height
	bind:clientWidth={frameWidth}
	bind:clientHeight={frameHeight}
>
	<svg class="clip-definition" aria-hidden="true" width="0" height="0">
		<defs>
			<clipPath id={clipId} clipPathUnits="objectBoundingBox">
				<path d={portraitPath} />
			</clipPath>
		</defs>
	</svg>

	<div class="media" style:clip-path={`url(#${clipId})`}>
		{#if image}
			<img src={image.src} alt={image.alt} />
		{:else}
			<p>{placeholder}</p>
		{/if}
	</div>

	<svg class="outline" viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden="true">
		<path d={portraitPath} />
	</svg>
</figure>

<style>
	.portrait-image {
		position: relative;
		width: 100%;
		aspect-ratio: 2 / 3;
		margin: 0;
		filter: drop-shadow(var(--offset) var(--offset) 0 var(--color-accent));
	}

	.clip-definition {
		position: absolute;
	}

	.media,
	.media img,
	.media p,
	.outline {
		width: 100%;
		height: 100%;
	}

	.media {
		background: var(--color-surface);
	}

	.media img {
		display: block;
		object-fit: cover;
	}

	.media p {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--space-5);
		font-family: var(--font-mono);
		font-size: 0.75rem;
		text-align: center;
		color: var(--color-text-muted);
	}

	.outline {
		position: absolute;
		inset: 0;
		pointer-events: none;
		overflow: visible;
	}

	.outline path {
		fill: none;
		stroke: var(--color-border);
		stroke-width: 1;
		vector-effect: non-scaling-stroke;
	}
</style>
