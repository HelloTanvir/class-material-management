import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedSubjectIndex, setSelectedSubjectIndex] = useState(-1);

    const router = useRouter();
    const { teacherName: route } = router.query;

    const subjectAndInstructor = {
        TP: ['Jalal Sir', 'Shuvo Sir'],
        CTCA: ['Tomal Sir', 'Solaiman Sir'],
        WPP: ["Jenny Ma'am", 'Emran Sir'],
        FM: ['Sayekh Munir Sir', "Asma Ma'am"],
        'AM-1': ["Farzana Ma'am", 'Sazid Sir'],
        FEEE: ['Mofizul Sir', 'Asaduzzaman Sir'],
    };

    const showTeachers = (subjectName: string, index: number) => {
        setSelectedSubject(subjectName);
        setSelectedSubjectIndex(index);
    };

    const hideTeachers = () => {
        setSelectedSubject('');
        setSelectedSubjectIndex(-1);
    };

    useEffect(() => {
        hideTeachers();
    }, [route]);

    return (
        <div className="flex items-center justify-between px-10 py-5 text-white rounded-lg bg-dark-500">
            <span className="text-3xl text-green-300">WPE-45</span>
            <div className="flex space-x-5">
                {Object.keys(subjectAndInstructor).map(
                    (subjectName: 'TP' | 'CTCA' | 'WPP' | 'FM' | 'AM-1' | 'FEEE', index) => (
                        <div
                            key={subjectName}
                            role="button"
                            tabIndex={index}
                            onFocus={() => {}}
                            onMouseOver={() => showTeachers(subjectName, index)}
                            // onClick={() => showTeachers(subjectName, index)}
                            onMouseLeave={() => hideTeachers()}
                            className="relative"
                        >
                            <span className="cursor-pointer">{subjectName}</span>

                            <div
                                className="absolute flex flex-col px-3 py-3 space-y-3 bg-gray-700 rounded-md w-max"
                                style={
                                    selectedSubject === subjectName &&
                                    selectedSubjectIndex === index
                                        ? {}
                                        : { opacity: 0, visibility: 'hidden' }
                                }
                            >
                                {subjectAndInstructor[subjectName].map((teacherName) => (
                                    <Link
                                        key={teacherName}
                                        href={`/teachers/${teacherName
                                            .toLowerCase()
                                            .replace(' ', '-')}`}
                                    >
                                        <span className="text-blue-200 cursor-pointer hover:text-blue-400">
                                            {teacherName}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Navbar;
