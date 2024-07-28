<script lang="ts">
	import { onMount } from 'svelte';
	import NoSleep from 'nosleep.js';
	onMount(() => {

		const noSleep = new NoSleep();
		noSleep.enable();
		return () => noSleep.disable();

	});

	export let data;

	const { params, hostname } = data;

</script>

<!-- <video
	playsinline
	muted
	autoplay
	loop
	src="https://rawgit.com/bower-media-samples/big-buck-bunny-480p-30s/master/video.mp4"
	height="60"
></video> -->

<main>
	<iframe src={`https://www.youtube.com/live_chat?v=${params.v}&embed_domain=${hostname}`}></iframe>
</main>

<style lang="scss">
	iframe {
		all: unset;
		width: 100%;
		height: 95vh;
	}
</style>
