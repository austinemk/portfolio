<script lang="ts">
	import { appState } from '$lib/state.svelte';
	import { ChevronDown, ChevronUp } from 'lucide-svelte';
	import { glitch } from '$lib/glitch';
</script>

<div class="flex w-full items-center justify-between gap-2 px-[10%] pt-[5%] md:pt-[2%]">
	<!--<div class="h-px flex-1 bg-text"></div>-->
	<div class="aspect-square w-2 bg-accent"></div>
	<button
		onclick={() => appState.toggle()}
		class="curved transition-color flex cursor-pointer items-center justify-between gap-2 px-1 font-semibold whitespace-nowrap"
	>
		<div class="flex items-center gap-1 text-accent">
			{#if appState.activeSection === 'about'}
				view <span use:glitch={{ mode: 'loop' }}>my</span> projects
			{:else}
				go <span use:glitch={{ mode: 'loop' }}>to</span> about
			{/if}
		</div>
	</button>

	<!--<div class="h-px flex-1 bg-text"></div>-->
</div>
