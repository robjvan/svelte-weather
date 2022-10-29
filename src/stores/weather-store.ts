import type { UserLocation } from 'src/interfaces/user-location.interface';
import { writable } from 'svelte/store';
import { apiKey } from '../keys';

function createWeatherStore() {
	const { subscribe, set, update } = writable({
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
		locationRegion: '',
		pressureIn: 0,
		pressureMb: 0,
		uv: 0,
		windDegrees: 0,
		windDir: '',
		windKph: 0,
		windMph: 0,
		latitude: -1,
		longitude: -1,
		isLoading: true
	});

	return {
		subscribe,
		set,
		update,
		fetchWeatherDetails: async (location: UserLocation) => {
			const { latitude, longitude } = location;
			const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`;
			const res: Response = await fetch(url);
			const data = await res.json();
			weatherStore.set({
				locationName: data.location.name,
				condition: data.current.condition.text,
				conditionCode: data.current.condition.code,
				conditionIconUrl: data.current.condition.icon,
				feelsLikeC: data.current.feelslike_c,
				feelsLikeF: data.current.feelslike_f,
				humidity: data.current.humidity,
				is_day: data.current.is_day,
				pressureIn: data.current.pressure_in,
				pressureMb: data.current.pressure_mb,
				tempC: data.current.temp_c,
				tempF: data.current.temp_f,
				latitude: data.location.lat,
				longitude: data.location.lon,
        isLoading: false,
        localtime: data.current.local_time,
        locationCountry: data.location.country,
				locationRegion: data.location.region,
        uv: data.current.uv,
        windDegrees: data.current.wind_degree,
        windDir: data.current.wind_dir,
        windKph: data.current.wind_kph,
        windMph: data.current.wind_mph,
			});
		}
	};
}

export const weatherStore = createWeatherStore();