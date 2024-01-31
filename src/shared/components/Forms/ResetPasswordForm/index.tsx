import { Button, Col, Form, Input, Row } from "antd";
import styles from './ResetPasswordForm.module.scss';
import utils from "styles/utils.module.scss";

const ResetPasswordForm = () => {
    return (
        <Form layout="vertical">
            <Row gutter={6}>
                <Col span={24}>
                    <Form.Item label="New Password">
                        <Input size="large" />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item label="Repeat Password">
                        <Input size="large" />
                    </Form.Item>
                </Col>
                <Col span={24} className={utils.btns_placement}>
                    <Button className={styles.reset_password_btn}>Change Password</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default ResetPasswordForm;