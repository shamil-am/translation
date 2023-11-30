import Link from "next/link";

import LocaleSwitcher from "../components/LanguageSwitcher";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
          <LocaleSwitcher />
        </nav>
        {children}
      </body>
    </html>
  );
}
