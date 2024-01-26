import { LockOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Flex, Image, MenuProps, Select, Switch, Tooltip, Typography } from "antd";
import avatar from 'shared/media/imgs/avatar.svg';
import az from 'shared/media/imgs/az.svg';
import tr from 'shared/media/imgs/tr.svg';
import styles from './headerElements.module.scss';
import uk from 'shared/media/imgs/uk.svg';
const { Text, Link } = Typography;

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

const HeaderElements = () => {
    return (
        <Flex className={styles.header_list} align="center">
            <Typography className={`${styles.header_list} ${styles.key}`} >
                <Tooltip placement="bottom" title='Reset User Password'>
                    <Link href="/reset-password">
                        <LockOutlined className={styles.key_icon} />
                    </Link>
                </Tooltip>
            </Typography>
            <Typography className={`${styles.list_item} ${styles.key}`} >
                <Select
                    defaultValue="uk"
                    style={{ width: 'auto', border: 'none', boxShadow: 'none' }}
                    options={[
                        { value: 'az', label: <Image src={az} preview={false} style={{ width: '20px' }} /> },
                        { value: 'tr', label: <Image src={tr} preview={false} style={{ width: '20px' }} /> },
                        { value: 'uk', label: <Image src={uk} preview={false} style={{ width: '20px' }} /> },
                    ]}
                />
            </Typography>
            <Typography className={`${styles.list_item} ${styles.profile}`}>
                <Dropdown menu={{ items }} placement="bottom" className={styles.profile_dropdown} arrow={{ pointAtCenter: true }}>
                    <Button className={styles.dropdown_profile_btn}>
                        <Image src={avatar} alt="" className={styles.avatar} preview={false} />
                        <Text className={styles.avatar_text}>
                            Guli Ahmedova
                        </Text>
                    </Button>
                </Dropdown>
            </Typography>
        </Flex>
    )
}

export default HeaderElements