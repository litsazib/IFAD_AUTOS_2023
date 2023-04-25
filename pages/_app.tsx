import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap-icons/font/bootstrap-icons.css";
import ScrollToTop from "react-scroll-to-top";
import MessengerCustomerChat from 'react-messenger-customer-chat';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="root">
      <Component {...pageProps} />
      <ScrollToTop smooth />
      <MessengerCustomerChat
        pageId="841264149232659"
        appId="678102670990450"
      />
    </div>
  );
}