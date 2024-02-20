import utils from "@/styles/utils.module.scss";
import { Button, Form, Input, Layout, Typography } from 'antd';

const ChangePassword = () => {
  return (
    <Layout className={`${utils.password_layout} ${utils.layout_gradient}`}>
      <Form layout='vertical' className={utils.password_form}>
        <Typography.Title level={2} className={utils.title}>
          Change Password
        </Typography.Title>
        <Form.Item label="New Password" htmlFor='newpassword' name="newpassword" className={utils.form_label}>
          <Input.Password name='newpassword' id='newpassword' type='password' className={utils.form_input} size='large' />
        </Form.Item>
        <Form.Item label="Repeat Password" htmlFor='repeatpassword' name="repeatpassword" className={utils.form_label}>
          <Input.Password name='repeatpassword' id='repeatpassword' type='password' className={utils.form_input} size='large' />
        </Form.Item>
        <Button htmlType='submit' type='default' className={utils.form_btn} size='large'>Send Code</Button>
      </Form>
    </Layout>
  )
}

export default ChangePassword;