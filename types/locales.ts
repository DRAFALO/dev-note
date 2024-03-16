import JsonDictionary from "@/dictionaries/en.json";

export enum LocaleEnum {
  VI = "vi",
  EN = "en",
}

export enum MappingLocaleEnum {
  vi = "Việt Nam",
  en = "English",
}

export type LocaleKeys = Record<keyof typeof JsonDictionary, string>;
