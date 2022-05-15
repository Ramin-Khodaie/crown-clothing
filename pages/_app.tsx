import "../scss/app.scss";
import Header from "../components/header";
import store from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
