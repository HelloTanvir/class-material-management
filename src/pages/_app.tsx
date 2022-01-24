import type { AppProps } from 'next/app';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const start = () => {
            setLoading(true);
        };

        const end = () => {
            setLoading(false);
        };

        Router.events.on('routeChangeStart', start);
        Router.events.on('routeChangeComplete', end);
        Router.events.on('routeChangeError', end);

        return () => {
            Router.events.off('routeChangeStart', start);
            Router.events.off('routeChangeComplete', end);
            Router.events.off('routeChangeError', end);
        };
    }, []);

    return (
        <>
            <ToastContainer />
            {loading ? (
                <Loader />
            ) : (
                <div className="flex flex-col justify-center w-screen h-screen px-5 bg-dark-600 space-y-7 lg:px-44">
                    <Navbar />
                    <Component {...pageProps} />
                </div>
            )}
        </>
    );
}
export default MyApp;
