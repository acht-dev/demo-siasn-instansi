import "../styles/globals.css";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../redux/store";
import cookie from "cookie";
import * as React from "react";
import type { IncomingMessage } from "http";
import type { AppProps, AppContext } from "next/app";
import { SSRKeycloakProvider, SSRCookies } from "@react-keycloak/ssr";

const keycloakCfg = {
  url: process.env.URL_IAM,
  realm: process.env.REALM_IAM,
  clientId: process.env.CLIENT_ID,
  secretId: process.env.MY_SECRET,
};

interface InitialProps {
  cookies: unknown;
}

function MyApp({ Component, pageProps, cookies }: AppProps & InitialProps) {
  return (
    <SSRKeycloakProvider
      keycloakConfig={keycloakCfg}
      persistor={SSRCookies(cookies)}>
      
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
    </SSRKeycloakProvider>
  );
}

function parseCookies(req?: IncomingMessage) {
  if (!req || !req.headers) {
    return {};
  }
  return cookie.parse(req.headers.cookie || "");
}

MyApp.getInitialProps = async (context: AppContext) => {
  // Extract cookies from AppContext
  return {
    cookies: parseCookies(context?.ctx?.req),
  };
};

const makestore = () => store;
const wrapper = createWrapper(makestore);
export default wrapper.withRedux(MyApp);
