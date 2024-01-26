import {
    CreditCardOutlined,
    HomeOutlined,
    ProjectOutlined,
    TeamOutlined,
    UsergroupAddOutlined
} from '@ant-design/icons';
import { Menu, MenuProps } from "antd";
import { NavLink } from 'react-router-dom';
import styles from './siderMenu.module.scss';
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';

const items: MenuProps['items'] = [
    {
        label: <NavLink className={({ isActive }) => (`${isActive ? `${styles.sidebar_active_link}` : `${styles.sidebar_menu_link}`}`)} to="/">Home</NavLink>,
        key: 'Home',
        icon: <HomeOutlined className='sidebar-menu-icon' />,
    },
    {
        label: <NavLink className={({ isActive }) => (`${isActive ? `${styles.sidebar_active_link}` : ''} ${styles.sidebar_menu_link}`)} to="/teams">Teams</NavLink>,
        key: 'Teams',
        icon: <TeamOutlined />
    },
    {
        label: <NavLink className={({ isActive }) => (`${isActive ? `${styles.sidebar_active_link}` : ''} ${styles.sidebar_menu_link}`)} to="/projects">Projects</NavLink>,
        key: 'Projects',
        icon: <ProjectOutlined />
    },
    {
        label: <NavLink className={({ isActive }) => (`${isActive ? `${styles.sidebar_active_link}` : ''} ${styles.sidebar_menu_link}`)} to="/reports">Reports</NavLink>,
        key: 'Reports',
        icon: <CreditCardOutlined />
    },
    {
        label: <NavLink className={({ isActive }) => (`${isActive ? `${styles.sidebar_active_link}` : ''} ${styles.sidebar_menu_link}`)} to="/employees">Employees</NavLink>,
        key: 'Employees',
        icon: <UsergroupAddOutlined />,
        className: styles.menu_item
    }
];

const SideMenu = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider theme='light' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} className={styles.sidebar_menu}>
            <Menu mode="vertical" key='sidebar' items={items} />
        </Sider>
    )
}

export default SideMenu;