import { TLocales } from "./locales";

export interface IServerPageProps {
  params: {
    lang: TLocales;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}
