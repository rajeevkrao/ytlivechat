<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { liveVideos } = data;
</script>

<main>
	<div class="container">
		{#if liveVideos?.length === 0}
			<h1>No live videos currently!</h1>
		{/if}
		{#each liveVideos as video}
			<a href={`/chat?v=${video.videoId}`} class="card">
				<img src={video.thumbnail} alt={video.title} />
				<h2>{video.title}</h2>
			</a>
		{/each}
	</div>
</main>

<div class="floating-button">
	<a href="/searchStreams"><Button>Open Different Live Stream</Button></a>
</div>

<style lang="scss">
	.floating-button {
		position: fixed;
		bottom: 1rem;
		left: 1rem;
	}
	.container {
		display: flex;
		flex-wrap: wrap;
	}
	.card {
		color: white;
		margin: 2rem;
		cursor: pointer;
		width: 20rem;
		img {
			width: 100%;
			object-fit: cover;
		}
	}
</style>
