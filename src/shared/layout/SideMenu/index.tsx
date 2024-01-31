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
import { Link } from 'react-router-dom';
import styles from './siderMenu.module.scss';

const SideMenu = () => {
    const [collapsed, setCollapsed] = useState(false);

    const items: MenuProps['items'] = [
        {
            label: <Link to="/">Home</Link>,
            key: 'Home',
            icon: <HomeOutlined className={styles.sidebar_icon} />
        },
        {
            label: <Link to="/teams">Teams</Link>,
            key: 'Teams',
            icon: <TeamOutlined className={styles.sidebar_icon} />
        },
        {
            label: <Link to="/projects">Projects</Link>,
            key: 'Projects',
            icon: <ProjectOutlined className={styles.sidebar_icon} />
        },
        {
            label: <Link to="/reports">Reports</Link>,
            key: 'Reports',
            icon: <CreditCardOutlined className={styles.sidebar_icon} />
        },
        {
            label: <Link to="/employees">Employees</Link>,
            key: 'Employees',
            icon: <UsergroupAddOutlined className={styles.sidebar_icon} />
        }
    ];

    return (
        <Sider theme='light' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} className={styles.sidebar_menu}>
            <Menu mode="vertical" key='sidebar' items={items} />
        </Sider>
    )
};

export default SideMenu;