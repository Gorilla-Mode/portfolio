<script lang="ts">
	let { name, role, bio }: { name: string; role: string; bio: string } = $props();
</script>

<section id="about" aria-labelledby="about-heading">
	<h1 id="about-heading">{name}</h1>
	<p class="role">{role}</p>
	<p class="bio">{bio}</p>
	<a class="projects-link" href="#projects">
		Explore projects
		<span aria-hidden="true">↓</span>
	</a>
</section>

<style>
	section {
		padding-top: clamp(4rem, 9vw, 7rem);
		padding-bottom: clamp(4rem, 8vw, 6rem);
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
		text-wrap: pretty;
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

	a:hover{
		color: var(--color-text);
	}
</style>
