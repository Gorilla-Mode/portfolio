<script lang="ts">
	type Portrait = { src: string; alt: string };
	type Shape = 'rounded' | 'pointed';

	let {
		image,
		placeholder,
		shape = 'rounded'
	}: { image?: Portrait; placeholder: string; shape?: Shape } = $props();

	const componentId = $props.id();
	const clipId = `${componentId}-portrait-clip`;
	let clipPath = $derived(
		shape === 'pointed'
			? 'M .5 0 C .18 .12 0 .3 0 .5 V 1 H 1 V .5 C 1 .3 .82 .12 .5 0 Z'
			: 'M .5 0 A .5 .333 0 0 1 1 .333 V 1 H 0 V .333 A .5 .333 0 0 1 .5 0 Z'
	);
	let outlinePath = $derived(
		shape === 'pointed'
			? 'M 100 0 C 36 36 0 90 0 150 V 300 H 200 V 150 C 200 90 164 36 100 0 Z'
			: 'M 100 0 A 100 100 0 0 1 200 100 V 300 H 0 V 100 A 100 100 0 0 1 100 0 Z'
	);
</script>

<figure class="portrait-image">
	<svg class="clip-definition" aria-hidden="true" width="0" height="0">
		<defs>
			<clipPath id={clipId} clipPathUnits="objectBoundingBox">
				<path d={clipPath} />
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

	<svg class="outline" viewBox="0 0 200 300" aria-hidden="true">
		<path d={outlinePath} />
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
