interface Name {
  common: string;
  official: string;
}

interface Flags {
  png: string;
  svg: string;
}

interface Languages {
  [key: string]: string;
}

interface Currency {
  name: string;
  symbol: string;
}

interface Currencies {
  [key: string]: Currency;
}

export interface Country {
  flags: Flags;
  name: Name;
  population: string;
  region: string;
  capital: string;
  languages: Languages;
  currencies?: Currencies;
  subregion: string;
  tld: string;
}
