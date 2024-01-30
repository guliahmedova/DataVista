import { Button, Col, DatePicker, Form, Row, Select, SelectProps } from "antd";
import { FC } from "react";
import { ReportFormType } from "src/shared/types/ReportFormType";
import styles from './ReportFilter.module.scss';
const { RangePicker } = DatePicker;

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

const ReportFilter: FC<ReportFormType> = ({ okBtnColor, okText }) => {
    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
    };

    return (
        <Form
            layout='vertical'
        >
            <Row gutter={6}>
                <Col span={24}>
                    <Form.Item label="Employees">
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
                    <Form.Item label="Date">
                        <RangePicker className={styles.date_picker} />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item label="Project Name">
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
}

export default ReportFilter