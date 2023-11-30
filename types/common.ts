import { TLocales } from "./locales";

export interface IServerPageProps {
  children?: React.ReactNode;
  params: {
    lang: TLocales;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}
