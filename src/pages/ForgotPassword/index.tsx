import { Button, Form, Input, Layout, Steps, Typography, message } from 'antd';
import { useState } from 'react';
import { ChangePassword, OTPConfirmation } from 'shared/index';
import utils from "styles/utils.module.scss";
import styles from './ForgotPaswword.module.scss';

const ForgotPassword = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const steps = [
    {
      title: 'Email',
      content: (
        <Layout className={`${utils.password_layout}`}>
          <Form layout='vertical' className={`${utils.password_form} `}>
            <Typography.Title level={2} className={utils.title}>
              Enter Your Email
            </Typography.Title>
            <Form.Item label="Email" name="email" className={utils.form_label}>
              <Input name='email' type='text' className={utils.form_input} size='large' />
            </Form.Item>
            <Button htmlType='submit' type='default' className={utils.form_btn} size='large'>Send Code</Button>
          </Form>
        </Layout>
      )
    },
    {
      title: 'OTP',
      content: <OTPConfirmation />
    },
    {
      title: 'Change Password',
      content: <ChangePassword />
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    width: '100%',
    height: '80vh',
    textAlign: 'center',
    color: "white",
    backgroundColor: "transparent",
    borderRadius: "none",
    boxShadow: 'none',
    border: "none",
    marginTop: 40,
  };

  return (
    <Layout className={`${utils.password_layout} ${utils.layout_gradient}`}>
      <Typography className={styles.stpper_header}>
        <Steps current={current} items={items}
          className={styles.stepper_title} />
      </Typography>
      <Typography style={contentStyle} >
        {steps[current].content}
      </Typography>
      <Typography style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
      </Typography>
    </Layout>
  )
}

export default ForgotPassword;