import { EditOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { ProjectEditForm } from 'shared/index';

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
            <Button type="default" shape="circle" onClick={showModal} icon={<EditOutlined />} size='middle' />
            <Modal title="User Edit Form" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Update" cancelText="Cancel">
                <ProjectEditForm />
            </Modal>
        </>
    )
}

export default ProjectEditButton;