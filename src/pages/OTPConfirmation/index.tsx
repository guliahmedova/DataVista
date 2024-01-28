import { Layout, Typography } from "antd";
import styles from './OtpConfirmation.module.scss';
import utils from "styles/utils.module.scss";
import { Button, Form } from 'antd';
import { InputOTP } from 'antd-input-otp';

const OTPConfirmation = () => {
    const [form] = Form.useForm();

    const handleFinish = (values: any) => {
        console.log(values);
    };

    return (
        <Layout className={`${utils.password_layout} ${utils.layout_gradient}`}>
            <Form onFinish={handleFinish} form={form} className={utils.password_form}>
                <Typography.Title level={2} className={utils.title}>
                    OTP Confirmation
                </Typography.Title>
                <Form.Item name="otp">
                    <InputOTP autoSubmit={form} inputType="numeric" />
                </Form.Item>
                <Button htmlType="submit" className={styles.otp_btn}>Send Code</Button>
            </Form>
        </Layout>
    )
};

export default OTPConfirmation;