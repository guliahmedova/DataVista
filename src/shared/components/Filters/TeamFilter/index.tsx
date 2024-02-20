import { ITeamFormType } from "@/shared/models";
import { Button, Col, Form, Row, Select, SelectProps } from "antd";

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

const TeamFilter: React.FC<ITeamFormType> = ({ okBtnColor, okText }) => {
    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
    };

    return (
        <Form
            layout='vertical'
        >
            <Row gutter={6}>
                <Col span={24}>
                    <Form.Item label='Teams'>
                        <Select
                            mode="multiple"
                            allowClear
                            placeholder="Please select"
                            onChange={handleChange}
                            options={options}
                        />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item label='Employees'>
                        <Select
                            mode="multiple"
                            allowClear
                            placeholder="Please select"
                            onChange={handleChange}
                            options={options}
                        />
                    </Form.Item>
                </Col>
                <Col>
                    <Button style={{ backgroundColor: `${okBtnColor}`, color: 'white' }}>{okText}</Button>
                </Col>
            </Row>
        </Form>
    )
};

export default TeamFilter;