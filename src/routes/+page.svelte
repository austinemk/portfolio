<script lang="ts">
	import { fade } from 'svelte/transition';
	import About from './about.svelte';
	import Projects from './projects.svelte';
</script>

<div class="flex w-1/2 flex-col items-start gap-3 pt-[10dvh] max-sm:w-3/4">
	<h2 class="self-start text-xl">> sudo</h2>
	<About />
	<Projects />
</div>
