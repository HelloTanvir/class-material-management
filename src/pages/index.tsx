import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
    <div>
        <Head>
            <title>Class Material Management</title>
            <meta name="description" content="Created for using as personal utility" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main
            style={{ height: 'calc(100vh - 57px)' }}
            className="flex items-center justify-center bg-gray-50"
        >
            <div className="px-5 py-6 text-xl tracking-wide bg-white shadow-md text-dark-500 rounded-xl">
                Please select a teacher to get all of his/her class recordings, lecture slides and
                class notes
            </div>
        </main>
    </div>
);

export default Home;
