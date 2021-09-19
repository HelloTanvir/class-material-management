import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
    <div>
        <Head>
            <title>Class Material Management</title>
            <meta name="description" content="Created for using as personal utility" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="px-10 py-5 text-center text-white rounded-lg bg-dark-500">
            Please select a teacher to get all of his/her class recordings, lecture slides and class
            notes
        </main>
    </div>
);

export default Home;
