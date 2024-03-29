import { useLoginUserMutation } from '@/redux/api/auth';
import utils from "@/styles/utils.module.scss";
import { Button, Form, Input, Layout, Typography } from 'antd';
import { useState } from 'react';
import styles from './Login.module.scss';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loginUser] = useLoginUserMutation();

  const handleSubmit = () => {
    loginUser({
      email: formData.email,
      password: formData.password
    })
  };

  return (
    <Layout className={`${utils.password_layout} ${utils.layout_gradient}`}>
      <Form layout='vertical' className={utils.password_form}>
        <Typography.Title className={utils.title}>
          Login
        </Typography.Title>

        <Form.Item label="Email" name="email" className={`${utils.form_label} ${styles.login_form_item}`}>
          <Input
            name='email'
            type='text'
            className={utils.form_input}
            size='large'
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        </Form.Item>

        <Form.Item label="Password" name="password" className={`${utils.form_label} ${styles.login_form_item}`}>
          <Input.Password
            name='password'
            className={utils.form_input}
            size='large'
            type='password'
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        </Form.Item>

        <Typography.Link className={styles.link_text} href='/forgot-password'>Forgot Password?</Typography.Link>
        <Button onClick={handleSubmit} htmlType='submit' type='default' className={utils.form_btn} size='large'>Sign in</Button>
      </Form>
    </Layout>
  )
};

export default Login;