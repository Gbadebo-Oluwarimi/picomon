"use client";

import { ThemeProvider as NextThemesProvider } from "next-theme";

export function ThemeProvider({ children, ...props }: any) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
