export class Forecast {
    data: Data;
}

export class Data {
    wave: Wave[];
}

export class Wave {
    timestamp: number;
    surf: Surf;
}

export class Surf {
    min: number;
    max: number;
}
