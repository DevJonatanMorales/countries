interface Name {
  common: string;
  official: string;
}

interface Flags {
  png: string;
  svg: string;
}

export interface Country {
  flags: Flags;
  name: Name;
  population: string;
  region: string;
  capital: string;
}
