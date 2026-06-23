<script lang="ts">
	import { ArrowBigRight } from 'lucide-svelte';
	import { glitch } from '$lib/glitch'; // Adjust the import path if your setup is different
</script>

<div
	class="relative flex min-h-[90dvh] w-full flex-col items-start justify-start gap-2 leading-relaxed font-medium"
>
	<!-- Terminal Command Title -->
	<h3 use:glitch={{ mode: 'loop', speed: 40 }} class="text-lg font-bold tracking-wider text-accent">
		/ get about
	</h3>

	<!-- Profile Image -->
	<img
		src="./about.png"
		alt="Austine's profile"
		class="border-muted aspect-square w-[10vw] self-start rounded-full max-sm:w-20"
	/>

	<!-- Intro Headers -->
	<div class="flex flex-col gap-1">
		<h2 class="font-bold">
			Hey, I'm <span use:glitch={{ mode: 'hover' }} class="cursor-default text-accent"
				>Austine.</span
			>
		</h2>
		<p class="">
			I specialize in <span class="font-semibold text-accent"
				>Cloud, DevOps, and Site Reliability Engineering.</span
			>
		</p>
	</div>

	<!-- Skills Section -->
	<div class="w-full space-y-2">
		<!--<p use:glitch={{ mode: 'once' }} class="text-sm font-bold tracking-wide text-accent">
			// Technologies & Paradigms
		</p>-->

		<ul class="flex list-[square] flex-col items-start gap-2 pl-6">
			<li>
				<span class="font-bold">AI & Intelligent Automation -> </span> LLM agents for DevOps, AIOps, Runbook
				Automation
			</li>
			<li><span class="font-bold">AProgramming Languages -> Go, Python, TypeScript</span></li>
			<li><span class="font-bold">Kernel -> </span> Linux</li>
			<li>
				<span class="font-bold">Containerization & Orchestration -> </span> Docker, Kubernetes
			</li>
			<li>
				<span class="font-bold">CI/CD & Workflow Automation -> </span> Actions, Automated Pipelines
			</li>
			<li><span class="font-bold">Infrastructure as Code -></span> Terraform</li>
			<li><span class="font-bold">Cloud Providers -></span> AWS, GCP</li>
		</ul>
	</div>

	<!-- Computer Science Foundation Line -->
	<!--<p>
		As a computer science graduate I have strong foundation in <span class="font-semibold"
			>Data Structures & Algorithms, Operating Systems, Networking Protocols (TCP/IP, DNS, HTTP),</span
		> and distributed system design.
	</p>-->

	<!-- Context Paragraph -->
	<p class="leading-normal">
		As a computer science graduate. In my free time, I'm nerdy about tech, deep-diving into Linux
		configurations, and experimenting with AI-driven automation systems
	</p>

	<!-- Social Connections -->
	<div class="flex items-center gap-6 pt-2">
		<a
			href="https://github.com/austinemk"
			target="_blank"
			rel="noopener noreferrer"
			class="transition-colors hover:text-accent"
			aria-label="GitHub Profile"
		>
			<img src="./github.png" alt="github" class="aspect-square w-6" />
		</a>

		<a
			href="mailto:your.email@example.com"
			class="transition-colors hover:text-accent"
			aria-label="Email Me"
		>
			<img src="./mail.png" alt="mail" class="aspect-square w-6" />
		</a>
	</div>
</div>
