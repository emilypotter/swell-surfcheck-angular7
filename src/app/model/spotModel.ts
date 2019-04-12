
export class Spot {
    _id: string;
    spotName: string;
    surflineId: string;
    surflineLongId: string;
    surflineRegionId: string;
    imageUrl: string;
}

export class RegionResponse {
    regions: Region[];
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

