<script lang="ts">
	import { onMount } from 'svelte';
	import NoSleep from 'nosleep.js';

	let wlStatus:'🔴' | '🟢' = '🔴';
	onMount(() => {
		const noSleep = new NoSleep();

		setInterval(() => {
			if (noSleep.isEnabled) {
				wlStatus = '🟢';
			} else {
				wlStatus = '🔴';
			}
		}, 500);

		document.addEventListener(
			'click',
			function enableNoSleep() {
				document.removeEventListener('click', enableNoSleep, false);
				noSleep.enable();
			},
			false
		);
		return () => noSleep.disable();
	});

	export let data;

	const { params, hostname } = data;
</script>

<main>
	<div class="status">WL{wlStatus}</div>
	<iframe
		title="yt-chat"
		src={`https://www.youtube.com/live_chat?v=${params.v}&embed_domain=${hostname}`}
	></iframe>
</main>

<style lang="scss">
	.status {
		position: fixed;
		left: 50%;
		transform: translateX(-50%);
	}
	iframe {
		all: unset;
		width: 100%;
		height: 100dvh;
	}
</style>
