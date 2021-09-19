import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="flex flex-col justify-center w-screen h-screen px-5 bg-dark-600 space-y-7 lg:px-44">
            <Navbar />
            <Component {...pageProps} />
        </div>
    );
}
export default MyApp;
