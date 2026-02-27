<script lang="ts">
	import { projects } from '$lib/projects';
	import { ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-svelte';

	let activeIndex = $state(0);
	let zoomedImage = $state<string | null>(null);
	let direction = $state<'up' | 'down'>('down');

	// Which image index is currently on top
	let topIndex = $state(0);

	const project = $derived(projects[activeIndex]);
	const maxLength = 250;

	const displayedDescription = $derived(
		project.description.length > maxLength
			? project.description.slice(0, maxLength) + '...'
			: project.description
	);

	// Reset image cycle when project changes
	$effect(() => {
		void project;
		topIndex = 0;
	});

	// Auto-cycle images
	$effect(() => {
		if (!project.images || project.images.length < 2) return;
		const timer = setInterval(cycleNext, 2600);
		return () => clearInterval(timer);
	});

	function cycleNext() {
		if (!project.images || project.images.length < 2) return;
		topIndex = (topIndex + 1) % project.images.length;
	}

	function next() {
		direction = 'down';
		activeIndex = (activeIndex + 1) % projects.length;
	}

	function prev() {
		direction = 'up';
		activeIndex = (activeIndex - 1 + projects.length) % projects.length;
	}

	function closeZoom() {
		zoomedImage = null;
	}

	// Card transition — new card rises from below (or falls from above)
	function cardIn(node: Element) {
		const fromY = direction === 'down' ? '110%' : '-110%';
		return {
			duration: 520,
			easing: (t: number) => 1 - Math.pow(1 - t, 4),
			css: (t: number) => `
				transform: translateY(calc(${fromY} * ${1 - t})) scale(${0.9 + 0.1 * t});
				opacity: ${Math.min(1, t * 2)};
				filter: blur(${(1 - t) * 8}px);
			`
		};
	}

	function cardOut(node: Element) {
		const toY = direction === 'down' ? '-25%' : '25%';
		return {
			duration: 380,
			easing: (t: number) => t * t * t,
			css: (t: number) => `
				transform: translateY(calc(${toY} * ${1 - t})) scale(${1 - 0.08 * (1 - t)});
				opacity: ${t};
				filter: blur(${(1 - t) * 5}px);
				pointer-events: none;
			`
		};
	}

	// Scroll-based navigation
	let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
	let accumulatedDelta = 0;
	const SCROLL_THRESHOLD = 80;

	function handleWheel(e: WheelEvent) {
		e.preventDefault();
		accumulatedDelta += e.deltaY;

		if (scrollTimeout) clearTimeout(scrollTimeout);

		if (accumulatedDelta >= SCROLL_THRESHOLD) {
			accumulatedDelta = 0;
			next();
		} else if (accumulatedDelta <= -SCROLL_THRESHOLD) {
			accumulatedDelta = 0;
			prev();
		}

		scrollTimeout = setTimeout(() => {
			accumulatedDelta = 0;
		}, 300);
	}

	// Touch support
	let touchStartY = 0;

	function handleTouchStart(e: TouchEvent) {
		touchStartY = e.touches[0].clientY;
	}

	function handleTouchEnd(e: TouchEvent) {
		const delta = touchStartY - e.changedTouches[0].clientY;
		if (Math.abs(delta) > 40) {
			delta > 0 ? next() : prev();
		}
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="relative flex h-full w-full flex-col justify-between gap-10 p-4 lg:p-10"
	onwheel={handleWheel}
	ontouchstart={handleTouchStart}
	ontouchend={handleTouchEnd}
	style="overflow: hidden; touch-action: none;"
>
	<!-- Header / nav -->
	<div class="relative z-10 flex items-stretch gap-2">
		<div class="curved flex flex-col items-start justify-start self-start">
			<span class="text-lg">
				{activeIndex + 1} <span class="text-sm">of</span>
				{projects.length}
			</span>
			<span class="text-xs opacity-70">{project.date}</span>
		</div>

		<div class="flex flex-col items-center justify-between">
			<button
				onclick={prev}
				class="cursor-pointer transition-colors hover:bg-white/5 disabled:opacity-20"
				disabled={projects.length < 2}
			>
				<ChevronUp class="w-4 stroke-1" />
			</button>
			<button
				onclick={next}
				class="cursor-pointer transition-colors hover:bg-white/5 disabled:opacity-20"
				disabled={projects.length < 2}
			>
				<ChevronDown class="w-4 stroke-1" />
			</button>
		</div>
	</div>

	<!-- Animated card area -->
	<div class="relative flex flex-1 items-center overflow-hidden">
		{#if zoomedImage}
			<div class="flex w-full flex-col items-center justify-center gap-4 p-1">
				<button class="cursor-pointer self-end hover:bg-stone-400/20" onclick={closeZoom}>
					close
				</button>
				<span class="h-0.5 w-full bg-text"></span>
				<img
					src={`/projects/${zoomedImage}.jpg`}
					alt={zoomedImage}
					class="h-full max-h-[50dvh] w-auto"
				/>
			</div>
		{:else}
			{#key activeIndex}
				<div
					in:cardIn
					out:cardOut
					class="absolute inset-0 flex w-full flex-col items-center gap-10 md:flex-row"
				>
					<!-- project info -->
					<div class="flex max-w-full flex-col items-start gap-1 md:max-w-2/3 lg:max-w-2/5">
						<div class="text-3xl leading-none font-extrabold uppercase">
							{project.title}
						</div>
						<div class="flex items-start gap-1 py-2 pr-1 text-start leading-5 font-semibold">
							<span class="mt-2 aspect-square w-5 bg-accent"></span>
							<p>{displayedDescription}</p>
						</div>
						<a
							href={project.link}
							class="curved flex items-center gap-1 font-bold transition-colors hover:bg-white hover:text-black"
						>
							visit project <ArrowUpRight />
						</a>
					</div>

					<!-- image stack -->
					{#if project.images}
						{@const total = project.images.length}
						<div class="flex flex-col items-start gap-1">
							<span class="text-xs opacity-70">[ click on any image to zoom ]</span>
							<div
								class="flex aspect-4/3 h-[30dvh] flex-col items-stretch overflow-hidden lg:aspect-5/3"
							>
								{#each project.images as img, i}
									<button
										onclick={() => (zoomedImage = img)}
										class="aspect-6/3 w-auto flex-1 cursor-zoom-in overflow-hidden"
									>
										<img
											src={`/projects/${img}.jpg`}
											alt={img}
											class="h-full w-full object-cover transition-all duration-700"
										/>
									</button>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			{/key}
		{/if}
	</div>
</div>

<style>
	div {
		scrollbar-width: none;
	}
	div::-webkit-scrollbar {
		display: none;
	}
</style>
