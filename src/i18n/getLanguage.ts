import { defaultLang, ui } from "./ui";

export function getLanguage(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) {
    return lang as keyof typeof ui;
  }

  return defaultLang;
}
