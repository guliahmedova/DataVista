import { KeyOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Flex, MenuProps, Switch, Tooltip, Typography, Image } from "antd";
import avatar from '../../../media/imgs/avatar.svg';
const { Text, Link } = Typography;

const HeaderElements = () => {
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Link href="/edit-profile" className="profile-menu-item">
                    <UserOutlined />
                    <Text>Edit Profile</Text>
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Button className="profile-menu-item dropdown-btn">
                    <LogoutOutlined className="dropdown-btn-icon" />
                    <Text>Logout</Text>
                </Button>
            ),
        },
        {
            key: '3',
            label: (
                <Button className="profile-menu-item dropdown-btn">
                    <Switch defaultChecked size="small" />
                    <Text>Dark Mode</Text>
                </Button>
            ),
        },
    ];

    return (
        <Flex className="header-list" align="center">
            <div className="list-item key" >
                <Tooltip placement="bottom" title='Reset User Password'>
                    <Link href="/reset-password">
                        <KeyOutlined className="key-icon" />
                    </Link>
                </Tooltip>
            </div>
            <div className="list-item profile">
                <Dropdown menu={{ items }} placement="bottom" className="profile-dropdown" arrow={{ pointAtCenter: true }}>
                    <Button className="dropdown-profile-btn">
                        <Image src={avatar} alt="" className="avatar" preview={false} />
                        <Text className="avatar-text">
                            Guli Ahmedova
                        </Text>
                    </Button>
                </Dropdown>
            </div>
        </Flex>
    )
}

export default HeaderElements