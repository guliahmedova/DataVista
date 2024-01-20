import { Layout } from 'antd';
import CustomHeader from './Header/CustomHeader';

const CustomLayout = () => {
  return (
    <Layout className='container'>
      <CustomHeader/>
    </Layout>
  )
}

export default CustomLayout