<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';
	import '@fontsource/space-mono';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<meta charset="utf-8" />
	<title>About Austine Mark</title>
	<meta
		name="description"
		content="Austine Mark is a product-focused software engineer building scalable, AI-powered digital systems from interface to infrastructure."
	/>
	<meta name="google-site-verification" content="SuKdyYLeKsPsvdvAqSG-guG4fvanUlvywxRmNxIF-tg" />
	<link rel="icon" type="image/x-icon" href={favicon} />
</svelte:head>

<Header />
<div class="h-[80dvh] w-full overflow-hidden">
	{@render children()}
</div>
<Footer />
