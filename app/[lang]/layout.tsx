import Link from "next/link";
import { FC } from "react";

import LocaleSwitcher from "@/components/LanguageSwitcher";
import { IServerPageProps } from "@/types/common";

const RootLayout: FC<IServerPageProps> = ({ children, params: { lang } }) => {
  return (
    <html lang={lang}>
      <body>
        <main>
          <nav style={{ display: "flex", justifyContent: "space-around" }}>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                flexGrow: 1,
                gap: "1rem",
                padding: 0,
              }}
            >
              <li>
                <Link href={`/${lang}`}>Home</Link>
              </li>
              <li>
                <Link href={`/${lang}/dashboard`}>Dashboard</Link>
              </li>
              <li>
                <Link href={`/${lang}/about`}>About</Link>
              </li>
            </ul>
            <LocaleSwitcher />
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
