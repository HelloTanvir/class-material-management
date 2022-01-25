import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Sidebar from '../../components/Sidebar';

const Teacher: NextPage = () => {
    const router = useRouter();

    const { teacherName, contentType } = router.query;

    // const mateirals: {
    //     [key: string]: { classRecordings: string[]; slides: string[]; classNotes: string[] };
    // } = {
    //     'jalal-sir': {
    //         classRecordings: [],
    //         slides: [],
    //         classNotes: [],
    //     },
    //     'shuvo-sir': {
    //         classRecordings: [],
    //         slides: [],
    //         classNotes: [],
    //     },
    //     'tomal-sir': {
    //         classRecordings: [],
    //         slides: [],
    //         classNotes: [],
    //     },
    //     'solaiman-sir': {
    //         classRecordings: [],
    //         slides: [],
    //         classNotes: [],
    //     },
    //     "jenny-ma'am": {
    //         classRecordings: [],
    //         slides: [],
    //         classNotes: [],
    //     },
    //     'emran-sir': {
    //         classRecordings: [],
    //         slides: [],
    //         classNotes: [],
    //     },
    //     'sayekh-munir-sir': {
    //         classRecordings: [],
    //         slides: [],
    //         classNotes: [],
    //     },
    //     "asma-ma'am": {
    //         classRecordings: [],
    //         slides: [],
    //         classNotes: [],
    //     },
    //     "farzana-ma'am": {
    //         classRecordings: [],
    //         slides: [],
    //         classNotes: [],
    //     },
    //     'sazid-sir': {
    //         classRecordings: [],
    //         slides: [],
    //         classNotes: [],
    //     },
    //     'mofizul-sir': {
    //         classRecordings: [],
    //         slides: [],
    //         classNotes: [],
    //     },
    //     'asaduzzaman-sir': {
    //         classRecordings: [],
    //         slides: [],
    //         classNotes: [],
    //     },
    // };

    return (
        <div>
            <Head>
                <title>{teacherName?.toString().toUpperCase().replace('-', ' ')}</title>
            </Head>

            <main style={{ height: 'calc(100vh - 57px)' }} className="flex gap-5 bg-gray-50">
                <Sidebar />

                <div className="flex flex-col items-center flex-1 gap-5 py-5 overflow-y-auto">
                    <div className="px-5 py-6 text-xl tracking-wide bg-white shadow-md text-dark-500 rounded-xl">
                        {teacherName?.toString().replace('-', ' ')} er kono {contentType} nai
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Teacher;
