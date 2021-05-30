export interface Mileage {
    number: number;
    unit: string;
}

export interface Car {
    stockNumber: number;
    manufacturerName: string;
    modelName: string;
    mileage: Mileage;
    fuelType: string;
    color: string;
    pictureUrl: string;
}

export interface CarMap {
    cars: Car[]
    totalPageCount: number;
    totalCarsCount: number;
}

export interface ColorMap {
    colors: string[]
}

export interface Manufacturer {
    name: string;
    models: ManufacturerName[]
}

export interface ManufacturerName {
    name: string
}

export interface ManufacturerMap {
    manufacturers: Manufacturer[]
}

export interface CarQuery {
    color?: string;
    manufacturer?: string;
    sort?: string;
    page: number
}

export interface FilterData {
    name: string;
    value: string;
}