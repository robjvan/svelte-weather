<script lang=ts>
	import type { WeatherData } from 'src/interfaces/weather-data.interface';
	import { weatherStore } from '../stores/weather-store';
	import Geolocation from 'svelte-geolocation';

	let isLoading: boolean = false;

	let weatherData: WeatherData = {
		condition: '',
		conditionCode: 0,
		conditionIconUrl: '',
		feelsLikeC: 0,
		feelsLikeF: 0,
		tempC: 0,
		tempF: 0,
		humidity: 0,
		is_day: false,
		localtime: '',
		locationCountry: '',
		locationName: '',
		pressureIn: 0,
		pressureMb: 0,
		uv: 0,
		windDegrees: 0,
		windDir: '',
		windKph: 0,
		windMph: 0,
		latitude: 0,
		longitude: 0
	};

	$: {
		weatherData.locationName = $weatherStore.locationName;
		(weatherData.latitude = $weatherStore.latitude),
			(weatherData.longitude = $weatherStore.longitude);
	}

	$: {
		isLoading = $weatherStore.isLoading;
	}
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

<h1>MiniWeather</h1>

<!-- {#if weatherData.latitude != -1}<p>{weatherData.latitude}</p>{/if}
{#if weatherData.latitude != -1}<p>{weatherData.longitude}</p>{/if} -->

{#if isLoading}
	<p>Loading weather data, please wait ...</p>	
{:else}
	<p>{weatherData.locationName}</p>
	<p>{weatherData.latitude}</p>
	<p>{weatherData.longitude}</p>
{/if}

<style>
</style>
