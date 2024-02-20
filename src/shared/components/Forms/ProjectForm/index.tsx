import { ITeamFormType } from "@/shared/models";
import utils from "@/styles/utils.module.scss";
import { Button, Col, Form, Input, Row, Select, SelectProps } from "antd";

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

const ProjectForm: React.FC<ITeamFormType> = ({ okText, okBtnColor }) => {
    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
    };

    return (
        <Form
            layout='vertical'
        >
            <Row gutter={6}>
                <Col span={24}>
                    <Form.Item label="Project Name">
                        <Input size="large" />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item label="Employees">
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

export default ProjectForm;