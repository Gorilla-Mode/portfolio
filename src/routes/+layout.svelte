<script lang="ts">
	import '../app.css';
    import { Dithering } from '@devmischief/shaders-svelte';

	let { children } = $props();


	function RandomBetween(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
</script>



<div class="background" aria-hidden="true">
    <Dithering
            width={2560}
            height={1440}
            colorBack="#121212"
            colorFront="#341313"
            shape="warp"
            type="4x4"
            size={1.8}
            speed={0.025}
            scale={8}
            rotation={RandomBetween(0, 180)}
            offsetX={RandomBetween(0, 10)}
            offsetY={RandomBetween(0, 10)}
            fit="contain"
    />
</div>

<div class="content">
    {@render children()}
</div>

<style>
    .background {
        position: fixed;
        width: 100dvw;
        height: 100dvh;
        inset: 0;
        z-index: 0;
        pointer-events: none;
    }

    .content {
        position: relative;
        z-index: 1;
    }
</style>
