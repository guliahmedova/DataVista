import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CustomHeader, SideMenu } from 'shared/index';

const CustomLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className='container'>
      <CustomHeader />
      <Layout>
        <Sider theme='light' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <SideMenu />
        </Sider>
        <Content className='main-content'>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default CustomLayout