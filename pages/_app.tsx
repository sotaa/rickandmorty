import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ErrorBoundary } from "react-error-boundary";

import { ErrorFallback } from "@housing/common";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        router.push(`/`);
      }}
    >
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
