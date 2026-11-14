// Describe structure of country data

export interface Country {
    names: {
        common: string;
        official: string;
    };

    flag: {
        url_png: string;
        url_svg: string;
    };

    population: number;
    region: string;
    capitals?: string[]; // Some have multiple capitals or none
    uuid: string; // For React keys
}