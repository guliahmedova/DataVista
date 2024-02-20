import { IProjectFormType } from "@/shared/models";
import { Button, Col, Form, Input, Row } from "antd";

const ProjectFilter: React.FC<IProjectFormType> = ({ okBtnColor, okText }) => {
  return (
    <Form layout='vertical'>
      <Row gutter={6}>
        <Col span={24}>
          <Form.Item label='Teams'>
            <Input />
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