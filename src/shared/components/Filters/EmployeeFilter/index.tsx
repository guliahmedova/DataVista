import { Button, Col, Form, Input, Row, Select, SelectProps } from "antd";
import { ProjectFormType } from "types/ProjectFormType";

const options: SelectProps['options'] = [
    {
        label: 'Joe',
        value: 'Joe'
    },
    {
        label: 'Sarah',
        value: 'Sarah'
    }
];

const EmployeeFilter: React.FC<ProjectFormType> = ({ okBtnColor, okText }) => {
    return (
        <Form layout='vertical'>
            <Row gutter={6}>
                <Col span={24}>
                    <Form.Item label="First Name">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item label="Last Name">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item label='Teams'>
                        <Select
                            mode="multiple"
                            allowClear
                            placeholder="Please select"
                            options={options}
                        />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item label="Project Name">
                        <Select
                            mode="multiple"
                            allowClear
                            placeholder="Please select"
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
}

export default EmployeeFilter;