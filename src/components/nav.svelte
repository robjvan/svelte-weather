<script>
	import FaHome from 'svelte-icons/fa/FaHome.svelte';
	import FaInfo from 'svelte-icons/fa/FaInfo.svelte';
	import { settingsStore } from '../stores/settings-store';
	import Switch from './switch.svelte';
</script>

<nav class="flex justify-between w-full">
	<a href="/"><div class="icon"><FaHome /></div></a>
	<div class="icon mx-auto" style="width: 200px;">
		<center>
			<Switch bind:value={$settingsStore.useMetric} />
		</center>
		<p style="text-align: center;">Toggle metric</p>
		</div>
	<a class="mx-4 text-lg" href="/about"><div class="icon"><FaInfo /></div></a>
</nav>

<style>
	.icon {
		width: 32px;
		height: 32px;
		color: #888;
	}
	nav {
		margin-bottom: 16px;
	}
</style>
