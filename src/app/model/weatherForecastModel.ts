// NEXT: MAKE THIS WORK FOR OPENWEATHER API

export class WeatherForecast {
  list: List[];
}

export class List {
  dt: number;
  main: Main;
  weather: Weather[];
  wind: Wind;
}

export class Main {
  temp: number;
}

export class Weather {
  description: string;
  icon: string;
}

export class Wind {
  speed: number;
  deg: number;
}
