import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import "@/styles/tailwind.css";
import "@/styles/app.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false} disableTransitionOnChange>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
