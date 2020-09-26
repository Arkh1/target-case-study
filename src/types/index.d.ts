export interface IDirection {
    Text?: string,
    Value?: string
}

export interface IProvider {
    Text?: string,
    Value?: string
}

export interface IRoute {
    Description?: string,
    Provider?: string,
    Route?: string
}
export interface IStop {
    Text?: string,
    Value?: string
}

export interface IVehicleLocation {
    Bearing: number,
    BlockNumber: number,
    Direction: number,
    LocationTime: Date,
    Odometer: number,
    Route: string,
    Speed: number,
    Terminal: string,
    VehicleLatitude: number,
    VehicleLongitude: number
}

