<script lang="ts">
	import { projects as initialProjects } from '$lib/projects';
	import { SquareArrowOutUpRight, ChevronRight, ChevronLeft } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	// Map the projects to include a reactive 'showImage' state for each project
	let projects = initialProjects.map((project) => ({ ...project, showImage: false }));
</script>

<div class="relative flex w-full flex-col gap-5 pt-14">
	<h3 class="font-bold text-accent">/ get projects</h3>

	{#each projects as project}
		<div
			class="border-muted relative flex w-full items-center gap-4 overflow-hidden border-b pb-6 last:border-0"
		>
			{#if !project.showImage}
				<div
					in:fly={{ x: -20, duration: 300 }}
					class="flex w-full items-center justify-between gap-4"
				>
					<div class="flex flex-1 flex-col gap-4">
						<h4 class="">
							/cd <span class="font-bold">{project.title}</span>
						</h4>
						<p class="leading-5">
							{project.description}. <span class="opacity-50">[ {project.date} ]</span>
						</p>
						<div class="flex items-center gap-5">
							{#if project.github}
								<a href={project.github}>
									<img class="aspect-square w-5" src="./github.png" alt="github" />
								</a>
							{/if}
							{#if project.link}
								<a href={project.link}><SquareArrowOutUpRight class="aspect-square w-5" /></a>
							{/if}
						</div>
					</div>

					<button
						on:click={() => (project.showImage = true)}
						class="flex h-full cursor-pointer items-center justify-center p-2 opacity-50 transition-colors duration-200 hover:text-accent"
						aria-label="Reveal image"
					>
						<ChevronRight class="h-6 w-6" />
					</button>
				</div>
			{:else}
				<div in:fly={{ x: 20, duration: 300 }} class="flex w-full items-center gap-4">
					<button
						on:click={() => (project.showImage = false)}
						class="text-muted-foreground flex h-full items-center justify-center p-2 transition-colors duration-200 hover:text-accent"
						aria-label="Reveal content"
					>
						<ChevronLeft class="h-6 w-6" />
					</button>

					<div class="w-full flex-1 overflow-hidden rounded-md border border-neutral-800">
						<img
							src={`./projects/${project.image}.jpg`}
							alt={`${project.title} screenshot`}
							class="h-auto w-full object-cover"
						/>
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>
