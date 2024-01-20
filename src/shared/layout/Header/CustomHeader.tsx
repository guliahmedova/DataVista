import { Header } from "antd/es/layout/layout";
import logo from '../../../shared/media/imgs/logoIcon.svg';
import { Link } from "react-router-dom";
import Search from "./Search/Search";
import HeaderElements from "./HeaderElements/HeaderElements";

const CustomHeader = () => {
  return (
    <Header style={{
      backgroundColor: 'white'
    }} className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="" className="logo-img" />
        <span className="logo-text">DataVista</span>
      </Link>
      <Search />
      <HeaderElements />
    </Header>
  )
}

export default CustomHeader