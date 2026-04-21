import "./globals.css";
import { Instrument_Serif, DM_Sans } from "next/font/google";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Andrei Foitoș — AI Engineer & Full-Stack Developer",
  description:
    "MSc Artificial Intelligence student at the University of Groningen. Building intelligent systems that work in practice.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body
        className="font-sans antialiased"
        style={{
          fontFamily: "var(--font-sans), system-ui, sans-serif",
          background: "var(--bg)",
          color: "var(--text)",
        }}
      >
        {children}
      </body>
    </html>
  );
}