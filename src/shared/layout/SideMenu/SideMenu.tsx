import {
    CreditCardOutlined,
    HomeOutlined,
    ProjectOutlined,
    TeamOutlined,
    UsergroupAddOutlined
} from '@ant-design/icons';
import { Menu, MenuProps } from "antd";
import { NavLink } from 'react-router-dom';

const items: MenuProps['items'] = [
    {
        label: <NavLink className={({ isActive }) => (`${isActive ? 'sidebar-active-link' : ''} sidebar-menu-link`)} to="/">Home</NavLink>,
        key: 'Home',
        icon: <HomeOutlined className='sidebar-menu-icon' />,
    },
    {
        label: <NavLink className={({ isActive }) => (`${isActive ? 'sidebar-active-link' : ''} sidebar-menu-link`)} to="/teams">Teams</NavLink>,
        key: 'Teams',
        icon: <TeamOutlined />
    },
    {
        label: <NavLink className={({ isActive }) => (`${isActive ? 'sidebar-active-link' : ''} sidebar-menu-link`)} to="/projects">Projects</NavLink>,
        key: 'Projects',
        icon: <ProjectOutlined />
    },
    {
        label: <NavLink className={({ isActive }) => (`${isActive ? 'sidebar-active-link' : ''} sidebar-menu-link`)} to="/reports">Reports</NavLink>,
        key: 'Reports',
        icon: <CreditCardOutlined />
    },
    {
        label: <NavLink className={({ isActive }) => (`${isActive ? 'sidebar-active-link' : ''} sidebar-menu-link`)} to="/users">Users</NavLink>,
        key: 'Users',
        icon: <UsergroupAddOutlined />
    }
];

const SideMenu = () => {
    return (
        <Menu mode="vertical" key='sidebar' items={items} />
    )
}

export default SideMenu;