import { Button, Col, Form, Input, Row, Select, SelectProps } from "antd";
import { FC } from "react";
import { TeamFormType } from "src/shared/types/TeamFormType";
import utils from "styles/utils.module.scss";

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

const EmployeeForm: FC<TeamFormType> = ({ okText, okBtnColor, actionKey }) => {
    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
    };

    return (
        <Form
            layout='vertical'
        >
            <Row gutter={6}>
                <Col span={12}>
                    <Form.Item label="First Name">
                        <Input size="large" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Last Name">
                        <Input size="large" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Email">
                        <Input size="large" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Password">
                        <Input size="large" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Teams">
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
                <Col span={12}>
                    <Form.Item label="Roles">
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
                {actionKey === 'EMPLOYEE_UPDATE' && (
                    <Col span={12}>
                        <Form.Item label="Status">
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
                )}
                <Col span={24} className={utils.btns_placement}>
                    <Button style={{ backgroundColor: `${okBtnColor}`, color: 'white' }}>{okText}</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default EmployeeForm;