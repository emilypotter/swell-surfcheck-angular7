export class Spot {
    _id: string;
    spotName: string;
    surflineId: string;
    surflineLongId: string;
    surflineRegionId: string;
    imageUrl: string;
    googleId: string;
}

export class LambdaResponse {
    body: string;
    status: string;
}

export class Region {
    regionName: string;
    surflineRegionId: string;
}

export class SurflineSpotConditions {
    data: Data;
}

export class Data {
    conditions: Conditions[];
}

export class Conditions {
    observation: string;
    am: TimeOfDay;
    pm: TimeOfDay;
}

export class TimeOfDay {
    maxHeight: number;
    minHeight: number;
    humanRelation: string;
}

export class SurflineSpot {
    camera: Camera;
    predicted: Predicted;
    current: Current;
    location: Location;
    travel: Travel;
}

export class Travel {
    best: Best;
}

export class Best {
    size: string;
    swell: string;
    wind: string;
    tide: string;
}

export class Location {
    spot: LatLong;
}

export class LatLong {
    lat: number;
    lon: number;
}

export class Camera {
    m3u8: string;
}

export class Predicted {
    tide: Tide[][];
}

export class Tide {
    clock_time: string;
    height: number;
    type: string;
}

export class Current {
    wind: Wind;
}

export class Wind {
    dir_card: string;
    speed: number;
    dir: number;
}

