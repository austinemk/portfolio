<script lang="ts">
	import { ArrowDown, Mail } from 'lucide-svelte';
</script>

<div class="relative flex h-full w-full flex-col items-center justify-center gap-0 py-10">
	<div
		class="col-span-3 flex h-full w-full flex-col items-center justify-center gap-5 overflow-hidden border-x border-base pb-10"
	>
		<div class="flex w-full items-center justify-center gap-1 border-l border-l-base">
			<div
				class="flex flex-col gap-0 text-[10dvw] leading-none font-extrabold uppercase max-sm:text-[20dvw]"
			>
				<span class="">Pro</span>
				<div class="h-0.5 w-full bg-base"></div>
				<span>duct</span>
			</div>
			<div class="flex flex-col justify-between">
				<img src="./me.jpg" alt="me" class="w-[10dvw] max-sm:w-[25dvw]" />
				<div class="self-end font-extralight">engineer</div>
			</div>
		</div>

		<div class="tex-lg font-semibold">[ Austine Mark ]</div>
	</div>

	<!--short description-->
	<div class="flex max-w-2/5 items-start gap-1 self-start pl-[10%] leading-4 max-sm:max-w-3/4">
		<span class="mt-3 aspect-square w-4 bg-accent lg:w-4"></span>
		<div class="text-lg font-semibold">
			I’m <span class="text-accent">Austine Mark</span>, a product-focused software engineer
			building scalable, AI-powered digital systems — from interface to infrastructure.
		</div>
	</div>
</div>
