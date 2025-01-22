export const languages = {
  de: "Deutsch",
  en: "English",
};

export const defaultLang: keyof typeof languages = "en";

export const ui: Record<keyof typeof languages, { [key: string]: string }> = {
  de: {},
  en: {},
};
