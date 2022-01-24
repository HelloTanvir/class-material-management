import { Menu, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';

interface Props {
    name: string;
    teachers: string[];
}

const SubjectBtn = ({ name, teachers }: Props) => {
    const router = useRouter();

    return (
        <Menu as="div" className="relative">
            <div>
                <Menu.Button className="flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wider text-white transition-all duration-300 bg-gray-700 rounded-md hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <AiOutlineUser />
                    {name}
                    <BsChevronDown />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute left-0 z-50 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg md:left-auto md:right-0 w-max md:w-56 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {teachers.map((teacher) => (
                        <div key={teacher} className="px-1 py-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="button"
                                        className={`${
                                            active ? 'bg-gray-300 text-white' : 'text-gray-900'
                                        } transition-all duration-300 flex rounded-md items-center gap-1 px-2 py-2 text-xs md:text-sm w-full`}
                                        onClick={() => {
                                            // router.push('/');
                                            router.push(
                                                `/teachers/${teacher
                                                    .toLowerCase()
                                                    .replace(' ', '-')}`
                                            );
                                        }}
                                    >
                                        <FiEdit />
                                        {teacher}
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default SubjectBtn;
