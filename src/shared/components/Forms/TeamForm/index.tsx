import { Col, Input, Row, Select, SelectProps } from "antd"
import { Form } from "antd"

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

const index = () => {
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
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item>
                        <Select
                            mode="multiple"
                            allowClear
                            style={{ width: '100%' }}
                            placeholder="Please select"
                            onChange={handleChange}
                            options={options}
                        />
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )
}

export default index