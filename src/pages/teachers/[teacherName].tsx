import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Teacher: NextPage = () => {
    const router = useRouter();
    const { teacherName } = router.query;

    const mateirals: {
        [key: string]: { classRecordings: string[]; slides: string[]; classNotes: string[] };
    } = {
        'jalal-sir': {
            classRecordings: [],
            slides: [],
            classNotes: [],
        },
        'shuvo-sir': {
            classRecordings: [],
            slides: [],
            classNotes: [],
        },
        'tomal-sir': {
            classRecordings: [],
            slides: [],
            classNotes: [],
        },
        'solaiman-sir': {
            classRecordings: [],
            slides: [],
            classNotes: [],
        },
        "jenny-ma'am": {
            classRecordings: [],
            slides: [],
            classNotes: [],
        },
        'emran-sir': {
            classRecordings: [],
            slides: [],
            classNotes: [],
        },
        'sayekh-munir-sir': {
            classRecordings: [],
            slides: [],
            classNotes: [],
        },
        "asma-ma'am": {
            classRecordings: [],
            slides: [],
            classNotes: [],
        },
        "farzana-ma'am": {
            classRecordings: [],
            slides: [],
            classNotes: [],
        },
        'sazid-sir': {
            classRecordings: [],
            slides: [],
            classNotes: [],
        },
        'mofizul-sir': {
            classRecordings: [],
            slides: [],
            classNotes: [],
        },
        'asaduzzaman-sir': {
            classRecordings: [],
            slides: [],
            classNotes: [],
        },
    };

    return (
        <div>
            <Head>
                <title>{teacherName?.toString().toUpperCase().replace('-', ' ')}</title>
            </Head>

            <main className="flex justify-between px-10 py-5 text-white rounded-lg bg-dark-500">
                {teacherName && typeof teacherName === 'string' ? (
                    <>
                        <div>
                            <h3 className="text-xl">Recordings</h3>

                            <div className="mt-4 space-y-2">
                                {mateirals[teacherName].classRecordings.map((link, index) => (
                                    <div key={link}>
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-blue-200 hover:text-blue-400"
                                        >
                                            Class - {index + 1}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl">Class Notes</h3>

                            <div className="mt-4 space-y-2 text-center">
                                {mateirals[teacherName].classNotes.map((link, index) => (
                                    <div key={link}>
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-blue-200 hover:text-blue-400"
                                        >
                                            Note - {index + 1}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl">Lecture Slides</h3>

                            <div className="mt-4 space-y-2 text-right">
                                {mateirals[teacherName].slides.map((link, index) => (
                                    <div key={link}>
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-blue-200 hover:text-blue-400"
                                        >
                                            Slide - {index + 1}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    'Please select a teacher to get all of his/her class recordings, lecture slides and class notes'
                )}
            </main>
        </div>
    );
};

export default Teacher;
