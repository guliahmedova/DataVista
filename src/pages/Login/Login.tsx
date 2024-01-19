import { Button, Form, Input, Layout, Typography } from 'antd';

const Login = () => {
  return (
    <Layout className='login-layout'>
      <Form layout='vertical' className='login-form'>
        <Typography.Title className='login-title'>Login</Typography.Title>
        <Form.Item label="Username" name="useername" className='form-label'>
          <Input name='username' type='text' className='form-input' size='large' />
        </Form.Item>
        <Form.Item label="Password" name="password" className='form-label'>
          <Input name='password' type='password'
            className='form-input' size='large' />
        </Form.Item>
        <Button htmlType='submit' type='default' className='login-btn' size='large'>Sign in</Button>
      </Form>
    </Layout>
  )
}

export default Login