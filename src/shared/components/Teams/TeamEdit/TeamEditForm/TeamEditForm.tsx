import { Col, Form, Input, Row } from 'antd';
import { useState } from 'react';
type LayoutType = Parameters<typeof Form>[0]['layout'];

const TeamEditForm = () => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState<LayoutType>('vertical');

    const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
        setFormLayout(layout);
    };

    return (
        <Form
            layout={formLayout}
            form={form}
            initialValues={{ layout: formLayout }}
            onValuesChange={onFormLayoutChange}
        >
            <Row gutter={6}>
                <Col span={24}>
                    <Form.Item label="Team Name">
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )
}

export default TeamEditForm