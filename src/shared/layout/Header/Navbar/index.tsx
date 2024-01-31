import { LockOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button, ColorPicker, Dropdown, Flex, Image, MenuProps, Select, Switch, Tooltip, Typography } from 'antd';
import { Header } from "antd/es/layout/layout";
import { FC } from 'react';
import { Search } from "shared/index";
import avatar from 'shared/media/imgs/avatar.svg';
import az from 'shared/media/imgs/az.svg';
import logo from 'shared/media/imgs/logoIcon.svg';
import tr from 'shared/media/imgs/tr.svg';
import uk from 'shared/media/imgs/uk.svg';
import { HeaderType } from 'src/shared/types/HeaderType';
import styles from './header.module.scss';
const { Text, Link } = Typography;

const CustomHeader: FC<HeaderType> = ({ setIsDarkMode, setPrimary, primary }) => {
  const handleClick = () => {
    if (setIsDarkMode) {
      setIsDarkMode((previousValue) => !previousValue);
    }
  };

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
        <Button className={`${styles.profile_menu_item} ${styles.dropdown_btn}`} onClick={handleClick}>
          <Switch defaultChecked size="small" />
          <Text>Dark Mode</Text>
        </Button>
      ),
    },
  ];


  return (
    <Header className={styles.header}>

      <Link href='/' className={styles.logo_icon}>
        <Image
          width='3rem'
          preview={false}
          src={logo}
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
        <Typography>
          <Tooltip title="Choose color" placement="top">
            <ColorPicker showText={() => <span>Choose Color</span>} value={primary} onChangeComplete={(color) => {
              if (setPrimary) {
                setPrimary(color.toHexString())
              }
            }} />
          </Tooltip>
        </Typography>
      </Flex>
    </Header>
  )
}

export default CustomHeader;