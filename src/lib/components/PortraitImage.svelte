<script lang="ts">
	import { onMount } from 'svelte';
	import type { PortraitFraming } from '$lib/content';

	type Portrait = { src: string; alt: string; framing?: PortraitFraming };
	type Shape = 'rounded' | 'pointed';
	type ResolvedFraming = Required<PortraitFraming>;
	type PositionedImage = {
		width: number;
		height: number;
		left: number;
		top: number;
	};

	function numberOr(value: number | undefined, fallback: number): number {
		return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
	}

	function resolveFraming(framing?: PortraitFraming): ResolvedFraming {
		const x = Math.min(100, Math.max(0, numberOr(framing?.x, 50)));
		const y = Math.min(100, Math.max(0, numberOr(framing?.y, 50)));
		const scale = numberOr(framing?.scale, 1);

		return { x, y, scale: scale > 0 ? scale : 1 };
	}

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

	let mediaElement: HTMLDivElement;
	let imageElement = $state<HTMLImageElement>();
	let frameWidth = $state(0);
	let frameHeight = $state(0);
	let intrinsicWidth = $state(0);
	let intrinsicHeight = $state(0);
	let measuredSource = $state<string>();
	let framing = $derived(resolveFraming(image?.framing));
	let focalPoint = $derived(`${framing.x}% ${framing.y}%`);
	let positionedImage = $derived.by((): PositionedImage | undefined => {
		if (
			!image ||
			measuredSource !== image.src ||
			frameWidth <= 0 ||
			frameHeight <= 0 ||
			intrinsicWidth <= 0 ||
			intrinsicHeight <= 0
		) {
			return undefined;
		}

		const coverScale = Math.max(frameWidth / intrinsicWidth, frameHeight / intrinsicHeight);
		const width = intrinsicWidth * coverScale * framing.scale;
		const height = intrinsicHeight * coverScale * framing.scale;

		return {
			width,
			height,
			left: ((frameWidth - width) * framing.x) / 100,
			top: ((frameHeight - height) * framing.y) / 100
		};
	});

	function measureImage(element: HTMLImageElement): void {
		if (!element.complete || element.naturalWidth <= 0 || element.naturalHeight <= 0) return;

		intrinsicWidth = element.naturalWidth;
		intrinsicHeight = element.naturalHeight;
		measuredSource = element.getAttribute('src') ?? undefined;
	}

	function handleImageLoad(event: Event): void {
		measureImage(event.currentTarget as HTMLImageElement);
	}

	onMount(() => {
		const measureFrame = () => {
			const bounds = mediaElement.getBoundingClientRect();
			frameWidth = bounds.width;
			frameHeight = bounds.height;
		};

		const observer = new ResizeObserver(measureFrame);
		observer.observe(mediaElement);
		measureFrame();

		if (imageElement) measureImage(imageElement);

		return () => observer.disconnect();
	});
</script>

<figure class:pointed={shape === 'pointed'} class="portrait-image" style:width style:height>
	<div class="media" bind:this={mediaElement}>
		{#if image}
			<img
				bind:this={imageElement}
				class:positioned={positionedImage !== undefined}
				src={image.src}
				alt={image.alt}
				style:object-position={focalPoint}
				style:width={positionedImage ? `${positionedImage.width}px` : undefined}
				style:height={positionedImage ? `${positionedImage.height}px` : undefined}
				style:left={positionedImage ? `${positionedImage.left}px` : undefined}
				style:top={positionedImage ? `${positionedImage.top}px` : undefined}
				onload={handleImageLoad}
			/>
		{:else}
			<p>{placeholder}</p>
		{/if}
	</div>

	<div class="outline" aria-hidden="true">
		{#if shape === 'pointed'}
			<svg class="arch-outline" viewBox="0 0 100 75" preserveAspectRatio="none">
				<path d="M 0 75 C 0 45 18 18 50 0 C 82 18 100 45 100 75" />
			</svg>
		{:else}
			<svg class="arch-outline" viewBox="0 0 100 50" preserveAspectRatio="none">
				<path d="M 0 50 A 50 50 0 0 1 100 50" />
			</svg>
		{/if}
		<span class="side-outline"></span>
		<span class="bottom-outline"></span>
	</div>
</figure>

<style>
	.portrait-image {
		--arch-depth: min(50cqi, 100%);
		--arch-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 50' preserveAspectRatio='none'%3E%3Cpath d='M50 0A50 50 0 0 1 100 50H0A50 50 0 0 1 50 0Z'/%3E%3C/svg%3E");

		position: relative;
		container-type: inline-size;
		width: 100%;
		aspect-ratio: 2 / 3;
		margin: 0;
		filter: drop-shadow(var(--offset) var(--offset) 0 var(--color-accent));
	}

	.portrait-image.pointed {
		--arch-depth: min(75cqi, 100%);
		--arch-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 75' preserveAspectRatio='none'%3E%3Cpath d='M50 0C18 18 0 45 0 75H100C100 45 82 18 50 0Z'/%3E%3C/svg%3E");
	}

	.media,
	.media img,
	.media p,
	.outline {
		width: 100%;
		height: 100%;
	}

	.media {
		position: absolute;
		inset: 0;
		overflow: hidden;
		background: var(--color-surface);
		-webkit-mask-image: var(--arch-mask), linear-gradient(#000 0 0);
		mask-image: var(--arch-mask), linear-gradient(#000 0 0);
		-webkit-mask-position:
			center top,
			center bottom;
		mask-position:
			center top,
			center bottom;
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-size:
			100% var(--arch-depth),
			100% calc(100% - var(--arch-depth) + 1px);
		mask-size:
			100% var(--arch-depth),
			100% calc(100% - var(--arch-depth) + 1px);
	}

	.media img {
		display: block;
		object-fit: cover;
	}

	.media img.positioned {
		position: absolute;
		max-width: none;
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
		color: var(--portrait-outline-color, var(--color-border));
		pointer-events: none;
	}

	.arch-outline {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: var(--arch-depth);
		overflow: visible;
	}

	.arch-outline path {
		fill: none;
		stroke: currentColor;
		stroke-width: 1;
		vector-effect: non-scaling-stroke;
	}

	.side-outline {
		position: absolute;
		inset: var(--arch-depth) 0 0;
		border-right: 1px solid currentColor;
		border-left: 1px solid currentColor;
	}

	.bottom-outline {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		border-bottom: 1px solid currentColor;
	}
</style>
