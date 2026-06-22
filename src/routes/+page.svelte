<script lang="ts">
	import { fade } from 'svelte/transition';
	import About from './about.svelte';
	import Projects from './projects.svelte';
</script>

<div class="flex w-full flex-col items-center gap-14 overflow-y-auto pt-[10dvh]">
	<h2 class="self-start pl-[10vw] text-xl">> sudo</h2>
	<About />
	<Projects />
</div>
