import { setModalOpen } from "@/redux/features/modal";
import { useAppDispatch } from "@/redux/store";
import { IButton } from "@/shared/models";
import utils from "@/styles/utils.module.scss";
import { Button, Col, Form, Input, Row } from "antd";

const TeamForm: React.FC<IButton> = ({ okText, okBtnColor }) => {
    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        dispatch(setModalOpen({ modalId: "TeamForm", isOpen: false }));
    };

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
                    <Button style={{ backgroundColor: `${okBtnColor}`, color: 'white' }} onClick={handleSubmit}>{okText}</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default TeamForm;