import { Button, Form, Input, Layout, Typography } from 'antd';
import styles from './login.module.scss';
import utils from "styles/utils.module.scss";
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Layout className={`${utils.password_layout} ${utils.layout_gradient}`}>
      <Form layout='vertical' className={utils.password_form}>
        <Typography.Title className={utils.title}>
          Login
        </Typography.Title>
        <Form.Item label="Email" name="email" className={utils.form_label}>
          <Input name='email' type='text' className={utils.form_input} size='large' />
        </Form.Item>
        <Form.Item label="Password" name="password" className={`${utils.form_label} ${styles.login_form_item}`}>
          <Input name='password' type={showPassword ? 'text' : 'password'}
            className={utils.form_input} size='large' />
          <Typography className={styles.eye_icon_box} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeInvisibleOutlined className={`${styles.eye_icon}`} /> : <EyeOutlined className={`${styles.eye_icon}`} />}
          </Typography>
        </Form.Item>
        <Typography.Link className={styles.link_text} href='/forgot-password'>Forgot Password?</Typography.Link>
        <Button htmlType='submit' type='default' className={utils.form_btn} size='large'>Sign in</Button>
      </Form>
    </Layout>
  )
}

export default Login