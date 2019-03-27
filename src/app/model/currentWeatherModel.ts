export class CurrentWeather {
    weather: Weather[];
    main: Main;
    wind: Wind;
}

export class Weather {
    description: string;
    icon: string;
}

export class Main {
    temp_max: number;
}

export class Wind {
    speed: number;
    deg: number;
}
