import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import NavBar from "./components/NavBar"; import Footer from "./components/Footer";
import { GradeBandProvider } from "./context/GradeBandContext";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { SchoolThemeProvider } from "./context/SchoolThemeContext";
import { schoolThemes, hexToRgbTriplet } from "./data/schoolThemes";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

// Precomputed once at render time so the pre-hydration script below (plain,
// dependency-free JS that runs before any bundle loads) can look a stored
// school-theme id up in a flat object instead of re-implementing
// SchoolThemeContext's logic in vanilla JS. "default" is intentionally
// excluded — no entry means the script applies nothing, which is exactly
// what leaves the CSS fallback (the site's own teal) in place.
const SCHOOL_THEME_MAP = Object.fromEntries(
  schoolThemes
    .filter((t) => t.id !== "default")
    .map((t) => [
      t.id,
      { primary: t.primary, primaryNight: t.primaryNight, primaryDark: t.primaryDark, secondary: t.secondary, rgb: hexToRgbTriplet(t.primary) },
    ])
);

const SITE_URL = "https://engineering-exploration-two.vercel.app";
const SITE_NAME = "Engineering Exploration";
const SITE_DESCRIPTION =
  "An honest, no-hype guide to what engineers actually do — explore engineering fields, take an interest quiz, and try hands-on challenges.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  verification: {
    google: "9hf73QJvPc-pHtT7C8brIVL1Nm1KtUQlPfSAXCsR_SY",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Applies a saved dark/light choice before first paint, so there's
            no flash — see app/context/ThemeContext.tsx and
            https://nextjs.org/docs/app/guides/preventing-flash-before-hydration.
            No saved choice means no class is added here, leaving the
            prefers-color-scheme media query in globals.css to decide. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("ee-theme");if(t==="dark"||t==="light")document.documentElement.classList.add(t)}catch(e){}})()`,
          }}
        />
        {/* Same flash-avoidance as above, for a saved school color theme —
            see app/context/SchoolThemeContext.tsx. No saved choice (or an
            explicit "Default") sets nothing here, leaving globals.css's own
            teal in place. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var id=localStorage.getItem("ee-school-theme");var themes=${JSON.stringify(SCHOOL_THEME_MAP)};var s=themes[id];if(s){var r=document.documentElement.style;r.setProperty("--school-primary-light",s.primary);r.setProperty("--school-primary-night",s.primaryNight);r.setProperty("--school-primary-dark",s.primaryDark);r.setProperty("--school-secondary",s.secondary);r.setProperty("--school-primary-rgb",s.rgb);r.setProperty("--school-grid-opacity","0.1")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <SchoolThemeProvider>
              <GradeBandProvider>
                <NavBar />
                {children}
                <Footer />
              </GradeBandProvider>
            </SchoolThemeProvider>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
