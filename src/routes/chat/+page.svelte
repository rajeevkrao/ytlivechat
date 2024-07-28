<script lang="ts">
	import { onMount } from 'svelte';
	/* import NoSleep from 'nosleep.js'; */

	let info:string = 'test';

	onMount(async() => {
		/* const noSleep = new NoSleep();
		noSleep.enable();
		return () => noSleep.disable(); */

		if ('wakeLock' in navigator) {
			const wakeLock = await navigator.wakeLock.request("screen");
			info = 'Wake Lock is active!';
			console.log('Wake Lock is active!');
			return () => wakeLock.release().then(() => console.log('Wake Lock is released.'));
		} else {
			info = 'Wake Lock API not supported by this browser.';
			console.log('Wake Lock API not supported by this browser.');
		}
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

{ info }

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
