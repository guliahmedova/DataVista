import { Button, Col, Form, Row, Select, SelectProps } from "antd";
import { FC, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './ReportForm.module.scss';
import { ReportFormType } from "src/shared/types/ReportFormType";
import utils from "styles/utils.module.scss";

const options: SelectProps['options'] = [
  {
    label: 'Furniro',
    value: 'Furniro'
  },
  {
    label: 'Plast',
    value: 'Plast'
  }
];

const ReportForm: FC<ReportFormType> = ({ okBtnColor, okText }) => {
  const [value, setValue] = useState('');

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  return (
    <Form layout='vertical'>
      <Row gutter={6}>
        <Col span={24}>
          <ReactQuill theme="snow" value={value} onChange={setValue} className={styles.ql_container} />
        </Col>
        <Col span={24}>
          <Form.Item label='Project Name'>
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

export default ReportForm;