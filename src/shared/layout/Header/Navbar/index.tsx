import { Image, Typography } from 'antd';
import { Header } from "antd/es/layout/layout";
import { HeaderElements, Search } from "shared/index";
import logo from 'shared/media/imgs/logoIcon.svg';
const { Text, Link } = Typography;
import styles from './header.module.scss';

const CustomHeader = () => {
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
      <HeaderElements />
    </Header>
  )
}

export default CustomHeader;