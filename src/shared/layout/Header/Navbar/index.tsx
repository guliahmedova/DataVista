import { LockOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button, Flex, Image, Space, Switch, Tooltip, Typography, theme } from 'antd';
import { Header } from "antd/es/layout/layout";
import { CustomModal, ResetPasswordForm } from "shared/index";
import { logoIcon, night, sun } from "shared/media/imgs";
import { HeaderType } from 'src/shared/types/HeaderType';
import styles from './CustomHeader.module.scss';
const { Text, Link } = Typography;

const enum ActionKeys {
  ADMIN_RESET_PASSWORD = 'ADMIN_RESET_PASSWORD'
};

const CustomHeader: React.FC<HeaderType> = ({ setIsDarkMode, isDarkMode }) => {
  const handleClick = () => { if (setIsDarkMode) setIsDarkMode((previousValue) => !previousValue) };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const actionStatus = {
    ADMIN_RESET_PASSWORD: <ResetPasswordForm />
  };

  return (
    <Header className={styles.header} style={{ background: colorBgContainer }}>
      <Flex className={styles.header_list}>
        <Link href='/teams' className={styles.logo_box}>
          <Image
            className={styles.logo_img}
            preview={false}
            src={logoIcon}
          />
          <Text className={styles.logo_text}>DataVista</Text>
        </Link>
        <Space className={styles.header_left}>
          <Typography className={`${styles.reset_pass_box} ${styles.key}`} >
            <Tooltip placement="bottom" title='Reset User Password'>
              <CustomModal actionKey="ADMIN_RESET_PASSWORD" classname="reset_employye_password_btn" icon={<LockOutlined />} title="Reset Password" actionStatus={actionStatus[ActionKeys.ADMIN_RESET_PASSWORD]} okText="Reset" />
            </Tooltip>
          </Typography>
          <Typography
            className={`${styles.dark_mode_box}`}
            onClick={handleClick}>
            <Switch defaultChecked size="default" className={styles.switch_box} />
            {isDarkMode ? (
              <Image src={sun} preview={false} className={styles.dark_mode_img} />
            ) : (
              <Image src={night} preview={false} className={styles.dark_mode_img} />
            )}
          </Typography>
          <Button className={`${styles.logout_btn_box} ${styles.dropdown_btn}`}>
            <Tooltip placement="top" title="Logout">
              <LogoutOutlined />
            </Tooltip>
          </Button>
        </Space>
      </Flex>
    </Header>
  )
};

export default CustomHeader;