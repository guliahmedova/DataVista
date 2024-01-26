import { WarningOutlined } from "@ant-design/icons";
import { Flex, Typography } from 'antd';
const { Text } = Typography;

const DeleteView = () => {
    return (
        <Flex align="center">
            <WarningOutlined />
            <Text type="danger">Ant DesignAre you sure you want to delete this item?</Text>
        </Flex>
    )
}

export default DeleteView