import {
    CreditCardOutlined,
    HomeOutlined,
    ProjectOutlined,
    TeamOutlined,
    UsergroupAddOutlined
} from '@ant-design/icons';
import { Menu, MenuProps } from "antd";
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './siderMenu.module.scss';

const items: MenuProps['items'] = [
    {
        label: (
            <NavLink className={({ isActive }) => (`${isActive ? `${styles.sidebar_active_link}` : ''} ${styles.sidebar_menu_link}`)} to="/">
                <HomeOutlined className={styles.sidebar_icon} />
                Home
            </NavLink>
        ),
        key: 'Home',
    },
    {
        label: (
            <NavLink className={({ isActive }) => (`${isActive ? `${styles.sidebar_active_link}` : ''} ${styles.sidebar_menu_link}`)} to="/teams">
                <TeamOutlined className={styles.sidebar_icon} />
                Teams
            </NavLink>
        ),
        key: 'Teams',
    },
    {
        label: (
            <NavLink className={({ isActive }) => (`${isActive ? `${styles.sidebar_active_link}` : ''} ${styles.sidebar_menu_link}`)} to="/projects">
                <ProjectOutlined className={styles.sidebar_icon} />
                Projects
            </NavLink>
        ),
        key: 'Projects',
    },
    {
        label: (
            <NavLink className={({ isActive }) => (`${isActive ? `${styles.sidebar_active_link}` : ''} ${styles.sidebar_menu_link}`)} to="/reports">
                <CreditCardOutlined className={styles.sidebar_icon} />
                Reports
            </NavLink>
        ),
        key: 'Reports',
    },
    {
        label: (
            <NavLink className={({ isActive }) => (`${isActive ? `${styles.sidebar_active_link}` : ''} ${styles.sidebar_menu_link}`)} to="/employees">
                <UsergroupAddOutlined className={styles.sidebar_icon} />
                Employees
            </NavLink>
        ),
        key: 'Employees',
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