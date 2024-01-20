import { KeyOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Flex, MenuProps, Switch, Tooltip } from "antd";
import { Link } from "react-router-dom";
import avatar from '../../../media/imgs/avatar.svg';

const HeaderElements = () => {
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div className="profile-menu-item">
                    <UserOutlined />
                    <span>Edit Profile</span>
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div className="profile-menu-item">
                    <LogoutOutlined />
                    <span>Logout</span>
                </div>
            ),
        },
        {
            key: '3',
            label: (
                <div className="profile-menu-item">
                    <Switch defaultChecked size="small" />
                    <span>Dark Mode</span>
                </div>
            ),
        },
    ];

    return (
        <Flex className="header-list" align="center">
            <div className="list-item key" >
                <Tooltip placement="bottom" title='Reset User Password'>
                    <Link to="/reset-password">
                        <KeyOutlined className="key-icon" />
                    </Link>
                </Tooltip>
            </div>
            <div className="list-item profile">
                <Dropdown menu={{ items }} placement="bottom" className="profile-dropdown" arrow={{ pointAtCenter: true }}>
                    <Button className="dropdown-profile-btn">
                        <img src={avatar} alt="" className="avatar" />
                        <span className="avatar-text">
                            Guli Ahmedova
                        </span>
                    </Button>
                </Dropdown>
            </div>
        </Flex>
    )
}

export default HeaderElements