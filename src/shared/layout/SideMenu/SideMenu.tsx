import {
    CreditCardOutlined,
    HomeOutlined,
    ProjectOutlined,
    TeamOutlined,
    UsergroupAddOutlined
} from '@ant-design/icons';
import { Menu, Typography } from "antd";
const { Link } = Typography;

const SideMenu = () => {
    return (
        <Menu
            className='sidebar-menu'
            items={[
                {
                    label: <Link className='sidebar-menu-link' href="/">Home</Link>,
                    key: '1',
                    icon: <HomeOutlined 
                    className='sidebar-menu-icon' />,
                    className: 'sidebar-active-link'
                },
                {
                    label: <Link className='sidebar-menu-link' href="/teams">Teams</Link>,
                    key: '2',
                    icon: <TeamOutlined />
                },
                {
                    label: <Link className='sidebar-menu-link' href="/projects">Projects</Link>,
                    key: '3',
                    icon: <ProjectOutlined />
                },
                {
                    label: <Link className='sidebar-menu-link' href="/reports">Reports</Link>,
                    key: '4',
                    icon: <CreditCardOutlined />
                },
                {
                    label: <Link className='sidebar-menu-link' href="/users">Users</Link>,
                    key: '5',
                    icon: <UsergroupAddOutlined />
                }
            ]}
        />
    )
}

export default SideMenu;