<script lang=ts>
	import { weatherStore } from '../stores/weather-store';
	import { settingsStore } from '../stores/settings-store';
	import type { WeatherData } from 'src/interfaces/weather-data.interface';
  import { get } from 'svelte/store';
	import { subscribe } from 'svelte/internal';
	</script>

	<img src={$weatherStore.conditionIconUrl} alt="Conditions icon" />
  <br>
  <p>Feels like</p>
  {#if $settingsStore.useMetric}
  <p>{$weatherStore.feelsLikeC} C</p>
  {:else}
  <p>{$weatherStore.feelsLikeF} F</p>
  {/if}
<style>
  img {
    height: 200px; 
    margin: auto;
  }
</style>
