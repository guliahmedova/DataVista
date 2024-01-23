import { DeleteOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';

const UserDeleteButton = () => {
    return (
        <Popconfirm title="Delete the User" description="Are you sure to delete this User?" okText="Yes" cancelText="No">
            <Button type="primary" shape="circle" danger icon={<DeleteOutlined />} size='middle' />
        </Popconfirm>
    )
}

export default UserDeleteButton