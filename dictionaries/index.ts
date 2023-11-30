import { TLocales } from "@/types/locales";
import "server-only";

const dictionaries = {
  az: () => import("./az.json").then((module) => module.default),
  en: () => import("./en.json").then((module) => module.default),
  ru: () => import("./ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: TLocales) => dictionaries[locale]();
