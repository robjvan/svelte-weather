<script lang=ts>
	import type { WeatherData } from 'src/interfaces/weather-data.interface';
	import { weatherStore } from '../stores/weather-store';
	import { settingsStore } from '../stores/settings-store';
	import '../ispinner.css';
	import Geolocation from 'svelte-geolocation';

	import ProgressSpinner from '../components/progress-spinner.svelte';
	import LocationName from '../components/location-name.widget.svelte';
	import TempWidget from '../components/temp.widget.svelte';
		
	let isLoading: boolean;
	let useMetric: boolean;

	$: {
		isLoading = $weatherStore.isLoading;
	}

	$: {
		useMetric = $settingsStore.useMetric;
	}

	// function refresh() {
	// 	weatherStore.fetchWeatherDetails({
	// 		latitude: $weatherStore.latitude,
	// 		longitude: $weatherStore.longitude
	// 	});
	// }
</script>

<Geolocation
	getPosition
	on:position={(e) => {
		weatherStore.fetchWeatherDetails({
			longitude: e.detail.coords.longitude,
			latitude: e.detail.coords.latitude
		});
	}}
/>

<svelte:head>
	<title>MiniWeather</title>
</svelte:head>

<div class="container mx-auto">
	{#if isLoading}
	<p>Loading weather data, please wait ...</p>
	<ProgressSpinner />
	{:else}
		<LocationName />	
		<TempWidget />
	{/if}
</div>

<style>
</style>
