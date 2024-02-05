import { LockOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button, Dropdown, Flex, Image, MenuProps, Switch, Tooltip, Typography, theme } from 'antd';
import { Header } from "antd/es/layout/layout";
import { CustomModal, ResetPasswordForm } from "shared/index";
import { avatarImg, logoIcon } from "shared/media/imgs";
import { HeaderType } from 'src/shared/types/HeaderType';
import styles from './Header.module.scss';
const { Text, Link } = Typography;

const enum ActionKeys {
  ADMIN_RESET_PASSWORD = 'ADMIN_RESET_PASSWORD'
};

const CustomHeader: React.FC<HeaderType> = ({ setIsDarkMode }) => {
  const handleClick = () => { if (setIsDarkMode) setIsDarkMode((previousValue) => !previousValue) };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items: MenuProps['items'] = [
    {
      key: '2',
      label: (
        <Button className={`${styles.profile_menu_item} ${styles.dropdown_btn}`}>
          <LogoutOutlined className="dropdown-btn-icon" />
          <Text>Logout</Text>
        </Button>
      ),
    },
    {
      key: '3',
      label: (
        <Typography className={`${styles.profile_menu_item} ${styles.dropdown_btn}`} onClick={handleClick}>
          <Switch defaultChecked size="small" />
          <Text>Dark Mode</Text>
        </Typography>
      ),
    },
  ];

  const actionStatus = {
    ADMIN_RESET_PASSWORD: <ResetPasswordForm />
  };

  return (
    <Header className={styles.header} style={{ background: colorBgContainer }}>
      <Link href='/teams' className={styles.logo_icon}>
        <Image
          className={styles.logo_img}
          preview={false}
          src={logoIcon}
        />
        <Text className={styles.logo_text}>DataVista</Text>
      </Link>
      <Flex className={styles.header_list}>
        <Typography className={`${styles.header_list} ${styles.key}`} >
          <Tooltip placement="bottom" title='Reset User Password'>
            <CustomModal actionKey="ADMIN_RESET_PASSWORD" classname={"reset_employye_password_btn"} icon={<LockOutlined />} title="Reset Password" actionStatus={actionStatus[ActionKeys.ADMIN_RESET_PASSWORD]} okText="Reset" />
          </Tooltip>
        </Typography>
        <Typography className={`${styles.list_item} ${styles.profile}`}>
          <Dropdown menu={{ items }} placement="bottom" className={styles.profile_dropdown} arrow={{ pointAtCenter: true }}>
            <Typography className={styles.dropdown_profile_btn}>
              <Image src={avatarImg} alt="" className={styles.avatar} preview={false} />
              <Text className={styles.avatar_text}>
                Guli
              </Text>
            </Typography>
          </Dropdown>
        </Typography>
      </Flex>
    </Header>
  )
};

export default CustomHeader;