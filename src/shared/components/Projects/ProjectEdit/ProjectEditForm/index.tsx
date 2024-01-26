import { Col, Form, Input, Row, Select } from 'antd';
import { useState } from 'react';
type LayoutType = Parameters<typeof Form>[0]['layout'];

const ProjectEditForm = () => {
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
            style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
        >
            <Row gutter={6}>
                <Col span={12}>
                    <Form.Item label="Name">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Lastname">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Username">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Email">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Password">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Team (Optional)">
                        <Select
                            defaultValue="Frontend"
                            style={{ width: '100%' }}
                            options={[
                                { value: 'Frontend', label: 'Frontend' },
                                { value: 'Backend', label: 'Backend' },
                                { value: 'Mobile', label: 'Mobile' },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Role">
                        <Select
                            defaultValue="User"
                            style={{ width: '100%' }}
                            options={[
                                { value: 'Admin', label: 'Admin' },
                                { value: 'User', label: 'User' },
                                { value: 'Head', label: 'Head' },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Status">
                        <Select
                            defaultValue="Active"
                            style={{ width: '100%' }}
                            options={[
                                { value: 'Active', label: 'Active' },
                                { value: 'Deactive', label: 'Deactive' },
                            ]}
                        />
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )
}

export default ProjectEditForm;