export interface WeatherData {
  is_day: boolean; // current.isDay

  locationName: string; // location.name
  locationCountry: string; // location.country
  localtime: string; // location.localtime

  tempC: number; // current.temp_c
  tempF: number; // curren.temp_f
  feelsLikeC: number; // current.feelslike_c
  feelsLikeF: number; // current.feelslike_f

  condition: string; // current.condition.text
  conditionCode: number; // current.condition.code
  conditionIconUrl: string; // current.condition.icon

  windKph: number; // current.wind_kph
  windMph: number; // current.wind_mph
  windDegrees: number; // current.wind_degree
  windDir: string; // current.wind_dir

  pressureMb: number; // current.pressure_mb
  pressureIn: number; // current.pressure_in

  humidity: number; // current.humidity
  uv: number; // current.uv

  latitude: number;
  longitude: number;
}