import { ITeamFormType } from "@/shared/models";
import utils from "@/styles/utils.module.scss";
import { Button, Col, Form, Input, Row } from "antd";

const TeamForm: React.FC<ITeamFormType> = ({ okText, okBtnColor }) => {
    return (
        <Form
            layout='vertical'
        >
            <Row gutter={6}>
                <Col span={24}>
                    <Form.Item label="Team Name">
                        <Input size="large" />
                    </Form.Item>
                </Col>
                <Col span={24} className={utils.btns_placement}>
                    <Button style={{ backgroundColor: `${okBtnColor}`, color: 'white' }}>{okText}</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default TeamForm;