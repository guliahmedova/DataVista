import { LockOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button, ColorPicker, Dropdown, Flex, Image, MenuProps, Select, Switch, Tooltip, Typography } from 'antd';
import { Header } from "antd/es/layout/layout";
import { Search } from "shared/index";
import { avatarImg, azLangIcon, logoIcon, trLangIcon, ukLangIcon } from "shared/media/imgs";
import { HeaderType } from 'src/shared/types/HeaderType';
import styles from './Header.module.scss';
const { Text, Link } = Typography;

const CustomHeader: React.FC<HeaderType> = ({ setIsDarkMode, setPrimary, primary, background }) => {
  const handleClick = () => { if (setIsDarkMode) setIsDarkMode((previousValue) => !previousValue) };

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

  return (
    <Header className={styles.header} style={{ background: background }}>

      <Link href='/teams' className={styles.logo_icon}>
        <Image
          className={styles.logo_img}
          preview={false}
          src={logoIcon}
        />
        <Text className={styles.logo_text}>DataVista</Text>
      </Link>

      <Search />

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
            className={styles.navbar_selec}
            options={[
              { value: 'az', label: <Image src={azLangIcon} preview={false} style={{ width: '20px' }} /> },
              { value: 'tr', label: <Image src={trLangIcon} preview={false} style={{ width: '20px' }} /> },
              { value: 'uk', label: <Image src={ukLangIcon} preview={false} style={{ width: '20px' }} /> },
            ]}
          />
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
        <Typography>
          <Tooltip title="Choose color" placement="top">
            <ColorPicker className={styles.colorpicker} showText={() => <span className={styles.colorpicker_text}>Choose Color</span>} value={primary} onChangeComplete={(color) => {
              if (setPrimary) setPrimary(color.toHexString())
            }} />
          </Tooltip>
        </Typography>
      </Flex>
    </Header>
  )
}

export default CustomHeader;