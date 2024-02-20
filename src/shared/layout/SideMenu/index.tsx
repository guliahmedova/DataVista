import { Urls } from '@/shared/constants/url';
import { CreditCardOutlined, ProjectOutlined, TeamOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from "antd";
import Sider from 'antd/es/layout/Sider';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './SidebarMenu.module.scss';

const SideMenu = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth <= 844) setCollapsed(false);
        };
        window.addEventListener("resize", handleResize);
        setCollapsed(true);
        return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);

    const items: MenuProps['items'] = [
        {
            label: <Link className={styles.menu_link} to={Urls.EMPLOYEES_URL}>Employees</Link>,
            key: 'Employees',
            icon: <UsergroupAddOutlined className={styles.sidebar_icon} />,
            className: location.pathname === Urls.EMPLOYEES_URL ? styles.active_link : "",
        },
        {
            label: <Link className={styles.menu_link} to={Urls.TEAMS_URL}>Teams</Link>,
            key: 'Teams',
            icon: <TeamOutlined className={styles.sidebar_icon} />,
            className: location.pathname === Urls.TEAMS_URL ? styles.active_link : ""
        },
        {
            label: <Link className={styles.menu_link} to={Urls.PROJECTS_URL}>Projects</Link>,
            key: 'Projects',
            icon: <ProjectOutlined className={styles.sidebar_icon} />,
            className: location.pathname === Urls.PROJECTS_URL ? styles.active_link : ""
        },
        {
            label: <Link className={styles.menu_link} to={Urls.REPORTS_URL}>Reports</Link>,
            key: 'Reports',
            icon: <CreditCardOutlined className={styles.sidebar_icon} />,
            className: location.pathname === Urls.REPORTS_URL ? styles.active_link : ""
        }
    ];

    return (
        <Sider theme='light' collapsible={windowWidth >= 844 ? true : false} collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} className={styles.sidebar_menu}>
            <Menu
                mode="vertical"
                items={items}
                className={styles.sidebar_menu_items} />
        </Sider>
    )
};

export default SideMenu;