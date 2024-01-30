import { WarningOutlined } from "@ant-design/icons";
import { Button, Space, Typography } from 'antd';
import styles from './Delete.module.scss';
const { Text } = Typography;

const DeleteView = () => {
    return (
        <Space align="center" className={styles.delete_view}>
            <WarningOutlined className={styles.delete_icon} />
            <Text type="danger" className={styles.delete_text}>Are you sure you want to delete this item?</Text>
            <Space>
                <Button danger>Delete</Button>
                <Button type="primary" >No</Button>
            </Space>
        </Space>
    )
}

export default DeleteView