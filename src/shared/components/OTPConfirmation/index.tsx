import { Button, Form, Layout, Typography } from "antd";
import { InputOTP } from 'antd-input-otp';
import utils from "styles/utils.module.scss";
import styles from './OtpConfirmation.module.scss';

const OTPConfirmation = () => {
    const [form] = Form.useForm();

    const handleFinish = (values: any) => {
        console.log(values);
    };

    return (
        <Layout className={`${utils.password_layout}`}>
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