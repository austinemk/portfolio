<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';
	import '@fontsource/chakra-petch';

	let { children } = $props();
</script>

<svelte:head>
	<meta charset="utf-8" />
	<title>About Austine Mark</title>
	<meta
		name="description"
		content="Austine Mark is a Cloud and DevOps Engineer ready to migrate your systems to the cloud with scalable infrastructure and AI-driven automation."
	/>
	<meta name="google-site-verification" content="2lYUyVnsKHNmFTP8vFaijOtbYSOQkpPb0vdKgj1YMQU" />
	<!-- Just use {favicon} directly; Vite handles the /portfolio base prefix for you -->
	<link rel="icon" type="image/x-icon" href={favicon} />
</svelte:head>

{@render children()}
