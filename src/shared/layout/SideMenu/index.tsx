import { CreditCardOutlined, ProjectOutlined, TeamOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from "antd";
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './SiderMenu.module.scss';

const enum Urls {
    TEAM = "/teams",
    PROJECT = "/projects",
    REPORT = "/reports",
    EMPLOYEE = "/employees"
};

const SideMenu = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();

    const items: MenuProps['items'] = [
        {
            label: <Link className={styles.menu_link} to="/teams">Teams</Link>,
            key: 'Teams',
            icon: <TeamOutlined className={styles.sidebar_icon} />,
            className: location.pathname === Urls.TEAM ? styles.active_link : ""
        },
        {
            label: <Link className={styles.menu_link} to="/projects">Projects</Link>,
            key: 'Projects',
            icon: <ProjectOutlined className={styles.sidebar_icon} />,
            className: location.pathname === Urls.PROJECT ? styles.active_link : ""
        },
        {
            label: <Link className={styles.menu_link} to="/reports">Reports</Link>,
            key: 'Reports',
            icon: <CreditCardOutlined className={styles.sidebar_icon} />,
            className: location.pathname === Urls.REPORT ? styles.active_link : ""
        },
        {
            label: <Link className={styles.menu_link} to="/employees">Employees</Link>,
            key: 'Employees',
            icon: <UsergroupAddOutlined className={styles.sidebar_icon} />,
            className: location.pathname === Urls.EMPLOYEE ? styles.active_link : ""
        }
    ];

    return (
        <Sider theme='light' collapsible collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)} className={styles.sidebar_menu}>
            <Menu
                mode="vertical"
                items={items}
                className={styles.sidebar_menu_items} />
        </Sider>
    )
};

export default SideMenu;