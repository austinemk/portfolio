<script lang="ts">
	import { ArrowBigRight } from 'lucide-svelte';
	import { glitch } from '$lib/glitch';
	import TreeLine from './treeLine.svelte'; // Make sure this path matches your file structure

	// Lean, high-impact categories
	let specializations: Array<{ id: string; title: string; content: string }> = [
		{
			id: '01',
			title: 'Cloud Architecture & Migration',
			content: 'AWS, GCP, Linux Systems, Enterprise Migrations'
		},
		{
			id: '02',
			title: 'Infrastructure as Code & Containers',
			content: 'Terraform, Docker, Kubernetes (K8s)'
		},
		{
			id: '03',
			title: 'CI/CD & Workflow Automation',
			content: 'GitHub Actions, Bash Scripting, Git, Automated Pipelines'
		},
		{
			id: '04',
			title: 'AI & Intelligent Automation',
			content: 'LLM agents for DevOps, AIOps, Self-Healing Systems'
		},
		{
			id: '05',
			title: 'Programming Languages',
			content: 'Go, Python, TypeScript'
		}
	];
</script>

<div
	class="relative mt-[5dvh] flex w-full flex-col items-start justify-start gap-4 leading-relaxed font-medium"
>
	<!-- Terminal Command Title -->
	<h3 class="mb-2 font-bold tracking-wider text-accent">
		/ ls st<span use:glitch={{ mode: 'loop', speed: 100 }}>ac</span>k
	</h3>

	<!-- Skills Section using your Custom Tree brackets -->
	<div class="flex w-full flex-col gap-3">
		{#each specializations as spec}
			<div class="relative flex flex-col pl-6">
				<div class="absolute top-1 left-0 h-2 w-3 border-t border-l border-foreground"></div>

				<!-- Bottom hook & spine (└) -->
				<div class="absolute top-1 left-0 h-10 w-3 border-b border-l border-accent"></div>

				<!-- Header Content Row -->
				<div class="flex h-6 items-center gap-1.5">
					<h3 class="tracking-wide text-accent italic">{spec.title}</h3>
				</div>

				<!-- Sub-Content Dropdown -->
				<p class="mt-2 pl-4 text-sm max-sm:text-xs">
					<span class="text-accent">```</span><br />
					{spec.content}
					<span class="text-accent">```</span>
				</p>
			</div>
		{/each}
	</div>
</div>
