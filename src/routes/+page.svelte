<script lang="ts">
	import About from './about.svelte';
	import Projects from './projects.svelte';
</script>

<div
	class="mt-[5dvh] flex w-1/2 flex-col items-start gap-0 rounded-lg bg-background p-10 max-sm:w-9/10"
>
	<!-- Hero section -->
	<div class="flex items-center gap-0">
		<span class="h-[10vw] w-px self-end bg-accent max-sm:h-[25vw]"></span>
		<span class="h-px w-[5vw] bg-accent"></span>
		<img
			src="./about1.png"
			alt="Austine's profile"
			class="border-muted aspect-square w-[20vw] self-start rounded-full max-sm:w-[50vw]"
		/>
	</div>
	<div class="flex items-end gap-0">
		<span class="h-[5dvh] w-px bg-accent"></span>
		<span class="h-px w-3 bg-accent"></span>
		<p class="m-0">sudo <span class="text-accent">Austine Mark</span> \n</p>
	</div>

	<p>
		<span class="text-accent">```</span><br />
		I am a Cloud and DevOps Engineer. By day, I build, manage, and automate scalable infrastructure. By
		night, I'm a terminaldwelling tech nerd richening Linux dotfiles, self-hosting automated pipelines,
		and architecting seamless cloud migrations just for the fun of it.
		<br />
		<span class="text-accent">```</span>
	</p>

	<div>
		[ <a href="https://github.com/stinmark" class="text-sm text-accent underline">github</a> |
		<a href="mailto:your-email@example.com" class="text-sm text-accent underline">email</a> ]
	</div>
	<Projects />
	<About />

	<p class="self-center text-xs">&copy; mark</p>
</div>
