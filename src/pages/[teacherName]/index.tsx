import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Sidebar from '../../components/Sidebar';

const Teacher: NextPage = () => {
    const router = useRouter();
    const { teacherName } = router.query;

    return (
        <div>
            <Head>
                <title>{teacherName?.toString().toUpperCase().replace('-', ' ')}</title>
            </Head>

            <main style={{ height: 'calc(100vh - 57px)' }} className="flex gap-5 bg-gray-50">
                <Sidebar open />

                <div className="flex flex-col items-center flex-1 gap-5 py-5 overflow-y-auto">
                    <div className="px-5 py-6 text-xl tracking-wide bg-white shadow-md text-dark-500 rounded-xl">
                        Please select recordings or lecture slides or class notes
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Teacher;
