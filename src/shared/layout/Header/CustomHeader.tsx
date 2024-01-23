import { Image, Typography } from 'antd';
import { Header } from "antd/es/layout/layout";
import { HeaderElements, Search } from "shared/index";
import logo from 'shared/media/imgs/logoIcon.svg';
const { Text, Link } = Typography;

const CustomHeader = () => {
  return (
    <Header style={{
      backgroundColor: 'white'
    }}
      className="header">
      <Link href='/' className='logo-icon'>
        <Image
          width='3rem'
          preview={false}
          src={logo}
        />
        <Text className="logo-text">DataVista</Text>
      </Link>
      <Search />
      <HeaderElements />
    </Header>
  )
}

export default CustomHeader;