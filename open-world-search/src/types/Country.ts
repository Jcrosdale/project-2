export interface Country {
    name: {
        common: string;
        official: string;
    };

    flags: {
        png: string;
        svg: string;
    };

    population: number;
    region: string;
    capital?: string[]; // Some have multiple capitals or none
    cca3: string; // For React keys
}