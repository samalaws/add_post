
export interface Country {
    name: string;
}

export interface City {
    name: string;
}
export interface TravelData {
    country: Country;
    city: City;
    travelDatesFrom: Date;
    travelDatesTo: Date;
    transportation: string;
    companions: string;
    experience: string;
    visitedPlaces: string;
    photo: File | null;
}
export interface Option {
    label: string;
    value: string;
}