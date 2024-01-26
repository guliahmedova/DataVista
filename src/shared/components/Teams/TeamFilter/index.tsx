import { Form, Input } from "antd"

const TeamFilter = () => {
    return (
        <Form layout="vertical">
            <Form.Item label="Team Name" rules={[
                {
                    required: true,
                    message: 'Input something!',
                },
            ]} style={{ fontWeight: '600' }}>
                <Input placeholder="Name..." />
            </Form.Item>
        </Form>
    )
}

export default TeamFilter