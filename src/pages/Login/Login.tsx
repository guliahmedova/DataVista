import { Form, Button, Input, Layout, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';

const Login = () => {
  return (
    <Layout className='login-layout'>
      <Content className='login-content'>
        <Typography.Title className='login-title'>Login</Typography.Title>
        <Form layout='vertical' className='login-form'>
          <Form.Item label="Username" name="useername" className='form-label'>
            <Input name='username' type='text' className='form-input' size='large' />
          </Form.Item>
          <Form.Item label="Password" name="password" className='form-label'>
            <Input name='password' type='password'
              className='form-input' size='large' />
          </Form.Item>
          <Button htmlType='submit' type='default' className='login-btn' size='large'>Sign in</Button>
        </Form>
      </Content>
    </Layout>
  )
}

export default Login