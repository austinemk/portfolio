<script lang="ts">
	import { ArrowDown, ChevronDown, Mail, Github } from 'lucide-svelte';
</script>

<div
	class="relative flex h-[90dvh] max-w-2/5 flex-col items-start justify-center gap-5 leading-4 font-semibold max-sm:max-w-3/4"
>
	<h3 class="text-lg font-bold text-accent">/ get about</h3>
	<img
		src="./about.png"
		alt="me"
		class="aspect-square w-[10dvw] self-start rounded-full max-sm:w-[25dvw]"
	/>
	<h3>Hey I'm <span class="text-accent">Austine,</span></h3>
	<p>
		I specializing in <span class="text-accent"
			>Cloud, Devops and Site reliability engineering.</span
		>
	</p>

	<p>Technologies am familiar with:</p>

	<ul class="ml-5 flex list-disc flex-col items-start gap-2">
		<li>Programming languages - golang, python, typescript</li>
		<li>OS - linux</li>
		<li>pipeline - CI/CD</li>
		<li>Iac - terraform</li>
		<li>Cloud providers - aws, gcp,</li>
	</ul>

	<p>
		In my free time I'm nerdy about tech, linux, tech movies. Currently active in linux community
	</p>

	<div>
		<a href="https://github.com/austinemk"
			><img src="./github.png" alt="github" class="aspect-square w-5" /></a
		>
	</div>
</div>
