export interface Country {
    id: number;
    name: string;
    countryCode: string;
}
export interface HolidayCountry {
    date: string;
    localName: string;
    name: string;
    countryCode: string;
    fixed: boolean;
    global: boolean;
    counties: string | null; 
    launchYear: number | null;
    types: string[]; 
}