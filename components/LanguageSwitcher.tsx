"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { locales } from "@/middleware";

const LocaleSwitcher = () => {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul style={{ display: "flex", listStyle: "none", gap: "1rem" }}>
      {locales.map((locale) => {
        return (
          <li key={locale}>
            <Link href={redirectedPathName(locale)}>{locale}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default LocaleSwitcher;
