import { Button, Form, Input, Layout, Typography } from 'antd';
import styles from './login.module.scss';

const Login = () => {
  return (
    <Layout className={styles.login_layout}>
      <Form layout='vertical' className={styles.login_form}>
        <Typography.Title className={styles.login_title}>
          Login
        </Typography.Title>
        <Form.Item label="Email" name="email" className={styles.form_label}>
          <Input name='email' type='text' className={styles.form_input} size='large' />
        </Form.Item>
        <Form.Item label="Password" name="password" className={styles.form_label}>
          <Input name='password' type='password'
            className={styles.form_input} size='large' />
        </Form.Item>
        <Typography.Link className={styles.link_text} href='/forgot-password'>Forgot Password?</Typography.Link>
        <Button htmlType='submit' type='default' className={styles.login_btn} size='large'>Sign in</Button>
      </Form>
    </Layout>
  )
}

export default Login