import { Button, Col, Form, Row, Select, SelectProps } from "antd";
import { FC } from "react";
import { ProjectFormType } from "src/shared/types/ProjectFormType";

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

const ProjectFilter: FC<ProjectFormType> = ({ okBtnColor, okText }) => {
  return (
    <Form layout='vertical'>
      <Row gutter={6}>
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
        <Col>
          <Button style={{ backgroundColor: `${okBtnColor}`, color: 'white' }}>{okText}</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default ProjectFilter;