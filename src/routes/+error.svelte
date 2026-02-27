<script lang="ts">
	import { glitch } from '$lib/glitch';
</script>

<div class="flex h-full w-full flex-col items-center justify-center gap-4">
	<h1 class="text-2xl" use:glitch={{ mode: 'loop' }}>404</h1>
	<p>This route doesn't exist</p>
	<a href="/" class="btn">[ back to safety ]</a>
</div>
