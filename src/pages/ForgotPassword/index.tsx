import { Button, Form, Input, Layout, Steps, Typography, message } from 'antd';
import ChangePassword from 'components/ChangePassword';
import OTPConfirmation from 'components/OTPConfirmation';
import { useState } from 'react';
import utils from "styles/utils.module.scss";
import styles from './ForgotPaswword.module.scss';

// interface StepperProps {
//   0: ReactNode,
//   1: ReactNode,
//   2: ReactNode
// };

const steps = [
  {
    title: 'Email',
    content: 'First-content',
  },
  {
    title: 'OTP',
    content: 'Second-content',
  },
  {
    title: 'Change Password',
    content: 'Last-content',
  },
];

const ForgotPassword = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    width: '60%',
    height: '70vh',
    textAlign: 'center',
    color: "white",
    backgroundColor: "transparent",
    borderRadius: "none",
    boxShadow: 'none',
    border: "none",
    marginTop: 40,
  };

  const currentSteps: any = {
    0: (
      <Form layout='vertical' style={{
        width: '100%'
      }} className={utils.password_form}>
        <Form.Item label="Email" name="email" className={utils.form_label}>
          <Input name='email' type='text' className={utils.form_input} size='large' />
        </Form.Item>
        <Button htmlType='submit' type='default' className={utils.form_btn} size='large'>Send Code</Button>
      </Form>
    ),
    1: (
      <OTPConfirmation />
    ),
    2: (
      <ChangePassword />
    )
  };

  return (
    <Layout className={`${utils.password_layout} ${utils.layout_gradient}`}>
      <Typography className={styles.stpper_header}>
        <Steps current={current} items={items}
          className={styles.stepper_title} />
      </Typography>
      <Typography style={contentStyle}>
        {currentSteps[current]}
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