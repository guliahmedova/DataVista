import { WarningOutlined } from "@ant-design/icons";
import { Button, Space, Typography } from 'antd';
import styles from './Delete.module.scss';
import { useDeleteEmployeeMutation } from "@/redux/api/employees";
const { Text } = Typography;

interface IDelete {
    id: number | null
};

const DeleteEmployee: React.FC<IDelete> = ({ id }) => {
    const [deleteEmployee] = useDeleteEmployeeMutation();

    const handleDelete = () => {
        console.log("Deleted");
        if (id) deleteEmployee(id);
    };

    return (
        <Space align="center" className={styles.delete_view}>
            <WarningOutlined className={styles.delete_icon} />
            <Text type="danger" className={styles.delete_text}>Are you sure you want to delete this item?</Text>
            <Space>
                <Button danger onClick={handleDelete}>Delete</Button>
                <Button type="primary" >No</Button>
            </Space>
        </Space>
    )
}

export default DeleteEmployee;