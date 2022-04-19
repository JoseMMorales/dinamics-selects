export interface Countries {
    error: boolean;
    msg: string,
    data: CountryData[]
};

export interface CountryData {
    name: string;
    iso2: string;
    iso3: string;
    unicodeFlag: string;
}
