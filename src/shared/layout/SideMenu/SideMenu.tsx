import { Menu } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, ProjectOutlined, TeamOutlined, UsergroupAddOutlined } from '@ant-design/icons';

const SideMenu = () => {
    return (
        <Menu>
            <Menu.Item key='home' icon={<HomeOutlined />}>
                <Link to='/'>Home </Link>
            </Menu.Item>
            <Menu.Item key="teams" icon={<TeamOutlined />}>
                <Link to='/teams'>Teams </Link>
            </Menu.Item>
            <Menu.Item key="projects" icon={<ProjectOutlined />}>
                <Link to='/projects'>Projects </Link>
            </Menu.Item>
            <Menu.Item key="reports">
                <Link to='/reports'>Reports </Link>
            </Menu.Item>
            <Menu.Item key="users" icon={<UsergroupAddOutlined />}>
                <Link to='/users'>Users </Link>
            </Menu.Item>
        </Menu>
    )
}

export default SideMenu;