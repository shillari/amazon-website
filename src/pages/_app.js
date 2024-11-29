import { Provider } from 'react-redux';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { store } from "../app/store";
import { useEffect, useState } from 'react';

const MyApp = ({ Component, pageProps }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Prevent rendering until client-side because of redux-persist
  if (!isClient) return null;

  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  )
}

export default MyApp;