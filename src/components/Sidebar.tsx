import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiTwotoneProject } from 'react-icons/ai';
import { BsArrowLeftRight } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { VscRecord } from 'react-icons/vsc';
import { Menu, MenuItem, ProSidebar, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

interface Props {
    open?: boolean;
}

const Sidebar = ({ open = false }: Props) => {
    const router = useRouter();

    const { teacherName } = router.query;

    const [collapsed, setCollapsed] = useState(!open);

    return (
        <div style={{ height: 'calc(100vh - 57px)' }} className="border-r shadow w-max">
            <ProSidebar width={250} collapsed={collapsed}>
                <SidebarHeader className="flex justify-end py-3 pr-5 bg-gray-200">
                    <BsArrowLeftRight
                        className="p-1 text-white bg-gray-700 rounded-full cursor-pointer hover:bg-gray-600"
                        fontSize={22}
                        onClick={() => setCollapsed((prev) => !prev)}
                    />
                </SidebarHeader>

                <Menu iconShape="circle">
                    <Link href={`/${teacherName}/recordings`} passHref>
                        <MenuItem icon={<VscRecord />}>Recordings</MenuItem>
                    </Link>

                    <Link href={`/${teacherName}/class-notes`} passHref>
                        <MenuItem icon={<FiEdit />}>Class Notes</MenuItem>
                    </Link>

                    <Link href={`/${teacherName}/lecture-slides`} passHref>
                        <MenuItem icon={<AiTwotoneProject />}>Lecture Slides</MenuItem>
                    </Link>
                </Menu>
            </ProSidebar>
        </div>
    );
};

export default Sidebar;
