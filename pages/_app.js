import React, { useEffect, useState } from "react";
import ThemeSettings from "../components/customizer/theme-settings";
import "../public/assets/scss/app.scss";
import { ToastContainer } from "react-toastify";
import TapTop from "../components/common/widgets/Tap-Top";
// import MessengerCustomerChat from "react-messenger-customer-chat";
import CartContextProvider from "../helpers/cart/CartContext";
import { WishlistContextProvider } from "../helpers/wishlist/WishlistContext";
import FilterProvider from "../helpers/filter/FilterProvider";
import SettingProvider from "../helpers/theme-setting/SettingProvider";
import { CompareContextProvider } from "../helpers/Compare/CompareContext";
import { CurrencyContextProvider } from "../helpers/Currency/CurrencyContext";
import Helmet from "react-helmet";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from '../helpers/apollo';
import Head from "next/head";
import { Provider } from "react-redux";
import store from '../app/redux/store'
import SnackbarProvider from 'react-simple-snackbar'

export default function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState();
  const apolloClient = useApollo(pageProps)

  useEffect(() => {
    const path = window.location.pathname.split("/");
    const url = path[path.length - 1];
    document.body.classList.add("dark");

    let timer=setTimeout(function () {
      setIsLoading(false)
    }, 1000);
    return () => { clearTimeout(timer)}
  }, []);
  return (
    <>
    <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <SnackbarProvider>
      {isLoading ? (
        <div className="loader-wrapper">
          {url === "Christmas" ? (
            <div id="preloader"></div>
          ) : (
            <div className="loader"></div>
          )}
        </div>
      ) : (
        <>
          {/* <MessengerCustomerChat
            pageId="2123438804574660"
            appId="406252930752412"
            htmlRef="https://connect.facebook.net/en_US/sdk.js"
          /> */}
          <Helmet>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <Head>
              {/* <link rel="icon" type="image/x-icon" href={favicon} /> */}
              <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.css"/>
              <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css"/>
              <script src="https://unpkg.com/react-id-swiper@3.0.0/lib/react-id-swiper.js"></script>
              <script src="https://unpkg.com/react-id-swiper@3.0.0/lib/react-id-swiper.min.js"></script>
            </Head>
            <title>Fragrance Events - Shop</title>
          </Helmet>
          <div>
            <SettingProvider>
              <CompareContextProvider>
                <CurrencyContextProvider>
                  <CartContextProvider>
                    <WishlistContextProvider>
                      <FilterProvider>
                        <Component {...pageProps} />
                      </FilterProvider>
                    </WishlistContextProvider>
                  </CartContextProvider>
                </CurrencyContextProvider>
                <ThemeSettings />
              </CompareContextProvider>
            </SettingProvider>
            <ToastContainer />
            <TapTop />
          </div>
        </>
      )}
      </SnackbarProvider>
      </ApolloProvider>
      </Provider>
    </>
  );
}
