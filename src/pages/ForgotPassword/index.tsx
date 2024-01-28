import { Button, Form, Input, Layout, Typography } from 'antd';
import utils from "styles/utils.module.scss";

const ForgotPassword = () => {
  return (
    <Layout className={`${utils.password_layout} ${utils.layout_gradient}`}>
      <Form layout='vertical' className={utils.password_form}>
        <Typography.Title level={2} className={utils.title}>
          Forgot Password
        </Typography.Title>
        <Form.Item label="Email" name="email" className={utils.form_label}>
          <Input name='email' type='text' className={utils.form_input} size='large' />
        </Form.Item>
        <Button htmlType='submit' type='default' className={utils.form_btn} size='large'>Send Code</Button>
      </Form>
    </Layout>
  )
}

export default ForgotPassword