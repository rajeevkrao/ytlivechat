<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { liveVideos } = data;

	const redirectToUrl = (url: string) => () => {
		window.location.href = url;
	};
</script>

<main>
	<div class="container">
		{#each liveVideos as video}
			<div on:click={redirectToUrl(`/chat?v=${video.videoId}`)} class="card">
				<img src={video.thumbnail} alt={video.title} />
				<h2>{video.title}</h2>
			</div>
		{/each}
	</div>
</main>

<style lang="scss">
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
