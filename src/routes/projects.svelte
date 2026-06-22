<script lang="ts">
	import { projects } from '$lib/projects';
	import { SquareArrowOutUpRight } from 'lucide-svelte';
</script>

<div class="relative flex h-full w-1/2 flex-col gap-10 p-4 lg:p-10">
	<h3 class="text-lg font-bold text-accent">/ get projects</h3>

	{#each projects as project}
		<div class="flex flex-col gap-4">
			<h4 class="text-accent">
				/cd <span class="text-lg font-bold uppercase">{project.title}</span>
			</h4>
			<p class="leading-5">
				{project.description}. <span class="opacity-50">[ {project.date} ]</span>
			</p>
			<div class="flex items-center gap-5">
				{#if project.github}
					<a href={project.github}
						><img class="aspect-square w-5" src="./github.png" alt="github" /></a
					>
				{/if}
				{#if project.link}
					<a href={project.link}><SquareArrowOutUpRight class="aspect-square w-5" /></a>
				{/if}
			</div>
			<div>
				[
				<img src={`./projects/${project.image}.jpg`} alt="project image" />
				]
			</div>
		</div>
	{/each}
</div>
