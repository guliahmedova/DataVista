import { Button, Col, Form, Input, Row, Select, SelectProps } from "antd";
import utils from "styles/utils.module.scss";
import { TeamFormType } from "types/TeamFormType";

const options: SelectProps['options'] = [
    {
        label: 'Trs',
        value: 'Trs'
    },
    {
        label: 'Joe',
        value: 'Joe'
    }
];

const TeamForm: React.FC<TeamFormType> = ({ okText, okBtnColor }) => {
    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
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
                <Col span={24}>
                    <Form.Item label='Employees'>
                        <Select
                            size="large"
                            mode="multiple"
                            allowClear
                            placeholder="Please select"
                            onChange={handleChange}
                            options={options}
                        />
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