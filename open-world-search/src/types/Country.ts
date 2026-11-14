// Describe structure of country data

export interface Country {
    names: {
        common: string;
        official: string;
    };

    flag: {
        png: string;
        svg: string;
    };

    population: number;
    region: string;
    capitals?: string[]; // Some have multiple capitals or none
    ccn3: string; // For React keys
}