import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap-icons/font/bootstrap-icons.css";
import ScrollToTop from "react-scroll-to-top";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="root">
      <Component {...pageProps} />
      <ScrollToTop smooth />
    </div>
  );
}