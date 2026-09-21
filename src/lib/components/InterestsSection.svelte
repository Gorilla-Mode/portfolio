<script lang="ts">
	import type { LocalizedInterest } from '$lib/content';
	import { ui } from '$lib/i18n';
	import PortraitImage from './PortraitImage.svelte';

	let { interests, copy }: { interests: LocalizedInterest[]; copy: (typeof ui)['en'] } = $props();

	const componentId = $props.id();
	const detailsId = `${componentId}-interest-details`;
	let selectedId = $state<string>();
	let activeId = $derived(selectedId ?? interests[0]?.id);
	let selectedInterest = $derived(
		interests.find((interest) => interest.id === activeId) ?? interests[0]
	);
</script>

<section id="interests" aria-labelledby="interests-heading">
	<div class="section-heading">
		<div>
			<h2 id="interests-heading">{copy.myInterests}</h2>
		</div>
	</div>

	<ul class="interest-grid" aria-label={copy.interests}>
		{#each interests as interest (interest.id)}
			<li class:selected={activeId === interest.id}>
				<div class="portrait-control">
					<PortraitImage
						image={interest.image}
						placeholder={copy.interestImagePlaceholder}
						shape="pointed"
						height="var(--interest-height)"
					/>
					<button
						type="button"
						aria-label={copy.selectInterest(interest.title)}
						aria-pressed={activeId === interest.id}
						aria-controls={detailsId}
						onclick={() => (selectedId = interest.id)}
					></button>
				</div>
				<p class="caption">{interest.caption}</p>
			</li>
		{/each}
	</ul>

	{#if selectedInterest}
		<article id={detailsId} class="interest-details">
			<div class="interest-copy" aria-live="polite" aria-atomic="true">
				<p class="visually-hidden">{copy.interestSelected(selectedInterest.title)}</p>
				<h3>{selectedInterest.title}</h3>
				<p class="description drop-cap">{selectedInterest.description}</p>
			</div>

			<div class="detail-portrait">
				<PortraitImage
					image={selectedInterest.detailImage}
					placeholder={copy.interestImagePlaceholder}
				/>
			</div>
		</article>
	{/if}
</section>

<style>
	section {
		--interest-height: 55dvh;

		padding-top: var(--space-7);
		padding-bottom: var(--space-9);
		border-top: 1px solid var(--color-border);
	}

	.section-heading {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: var(--space-5);
		margin-bottom: var(--space-7);
	}

	h2 {
		margin-top: var(--space-4);
		font-size: clamp(2rem, 4vw, 2.75rem);
		line-height: 1.15;
		letter-spacing: -0.05em;
	}

	.interest-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: clamp(var(--space-2), 3vw, var(--space-5));
		margin: 0;
		padding: 0 var(--offset) var(--offset) 0;
		list-style: none;
	}

	.interest-grid > li {
		min-width: 0;
	}

	.portrait-control {
		position: relative;
	}

	.portrait-control :global(.portrait-image) {
		max-width: 100%;
	}

	button {
		position: absolute;
		z-index: 1;
		inset: 0;
		width: 100%;
		padding: 0;
		border: 0;
		color: inherit;
		background: transparent;
		cursor: pointer;
	}

	.selected :global(.outline path) {
		stroke: var(--color-text);
	}

	.caption {
		width: fit-content;
		max-width: 100%;
		margin-top: var(--space-4);
		padding-bottom: var(--space-1);
		border-bottom: 1px solid transparent;
		font-family: var(--font-mono);
		font-size: 0.75rem;
		line-height: 1.5;
		color: var(--color-text-muted);
		overflow-wrap: anywhere;
	}

	.selected .caption {
		border-color: var(--color-border);
		color: var(--color-text);
	}

	.interest-details {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(12rem, 18rem);
		align-items: start;
		gap: clamp(var(--space-6), 7vw, var(--space-8));
		margin-top: var(--space-7);
		padding-right: var(--offset);
	}

	.interest-copy {
		min-width: 0;
	}

	.interest-copy h3 {
		font-family: var(--font-header);
		font-size: clamp(1.75rem, 3vw, 2.25rem);
		line-height: 1.2;
		letter-spacing: -0.04em;
		color: var(--color-text-bright);
	}

	.description {
		margin-top: var(--space-4);
		line-height: 1.8;
		color: var(--color-text-muted);
	}

	.detail-portrait {
		min-width: 0;
		width: 100%;
		max-width: 18rem;
		justify-self: end;
	}

	.detail-portrait :global(.portrait-image) {
		max-width: 100%;
	}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
		white-space: nowrap;
		border: 0;
	}

	@media (max-width: 40rem) {
		section {
			--interest-height: 50dvh;
		}

		.section-heading {
			align-items: start;
			flex-direction: column;
			margin-bottom: var(--space-6);
		}

		.interest-grid {
			gap: clamp(var(--space-2), 2.5vw, var(--space-3));
		}

		.caption {
			margin-top: var(--space-3);
		}

		.interest-details {
			grid-template-columns: minmax(0, 1fr);
			gap: var(--space-6);
			margin-top: var(--space-6);
		}

		.detail-portrait {
			width: min(70vw, 16rem);
			justify-self: center;
		}
	}
</style>
