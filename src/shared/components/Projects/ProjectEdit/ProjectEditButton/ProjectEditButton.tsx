import { EditOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { ProjectEditForm } from 'shared/components/index';

const ProjectEditButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="primary" shape="circle" onClick={showModal} style={{ backgroundColor: 'orange' }} icon={<EditOutlined />} size='middle' />
            <Modal title="User Edit Form" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Update" cancelText="Cancel">
                <ProjectEditForm />
            </Modal>
        </>
    )
}

export default ProjectEditButton;