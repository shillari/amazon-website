import { Provider } from 'react-redux';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { store } from "../app/store";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  )
}

export default MyApp;