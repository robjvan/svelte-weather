import type { UserLocation } from 'src/interfaces/user-location.interface';
import { writable } from 'svelte/store';


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
      pressureIn: 0,
      pressureMb: 0,
      uv: 0,
      windDegrees: 0,
      windDir: '',
      windKph: 0,
      windMph: 0,
      latitude: 0,
      longitude: 0,
    });

  return {
    subscribe,
    set,
    update,
    fetchWeatherDetails: async (location: UserLocation) => {
      const url = `http://api.weatherapi.com/v1/forecast.json?key=`;
    
      // TODO: Add weather fetching logic here
      weatherStore.set({locationName: 'Hell', latitude: location.latitude, longitude: location.longitude });
    },

  }

}

export const weatherStore = createWeatherStore();





// export const weatherStore = writable({
//   locationName: ''
// });

// const fetchWeatherDetails = async (location: UserLocation) => {
// 	const url = `http://api.weatherapi.com/v1/forecast.json?key=`;

// 	// TODO: Add weather fetching logic here
//   weatherStore.set({locationName: 'Hell'});
// };

// fetchWeatherDetails(await grabUserLocation());
