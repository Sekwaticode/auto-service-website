import { Inter_Tight, JetBrains_Mono } from "next/font/google";

/** Headline/body font shared by the homepage sections. */
export const display = Inter_Tight({ subsets: ["latin"], variable: "--font-display" });

/** Small uppercase labels ("eyebrows"). */
export const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-eyebrow" });
