export interface IWeather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface IMain {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface IClouds {
  all: number;
}

export interface ICoord {
  lat: number;
  lon: number;
}

export interface IWind {
  deg: number;
  gust: number;
  speed: number;
}

export interface IWeatherResponse {
  base: string;
  clouds: IClouds;
  cod: number;
  coord: ICoord;
  dt: number;
  id: number;
  main: IMain;
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: IWeather[];
  wind: IWind;
}

export interface IForecastResponse {
  city: {
    coord: ICoord;
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  cnt: number;
  cod: string;
  list: {
    clouds: IClouds;
    dt: number;
    dt_txt: string;
    main: IMain;
    pop: number;
    sys: {
      pod: string;
    };
    visibility: number;
    weather: IWeather[];
    wind: IWind;
  }[];
}
