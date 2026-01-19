<script>
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';

	import axios from 'axios';
	import { onMount } from 'svelte';

	let searchText = '';
	let searchRef;

	let searchResult = [];

	onMount(() => {
		searchRef.focus();
	});

	async function search() {
		if (searchText?.length === 0) return;

		const { data } = await axios.get('/api/searchStreams?q=' + searchText);
		searchResult = data;
	}
</script>

<div style="display:flex; gap: .5rem;">
	<Input bind:useRef={searchRef} placeholder="Search..." bind:value={searchText} />
	<Button on:click={() => search()}>Search</Button>
</div>

<div>
	{#each searchResult as video}
		<a href={`/chat?v=${video.videoId}`} class="card">
			<img src={video.thumbnail} alt={video.title} />
			<h2>{video.title}</h2>
		</a>
	{/each}
</div>

<svelte:window on:keydown={(e) => e.key === 'Enter' && search()} />
