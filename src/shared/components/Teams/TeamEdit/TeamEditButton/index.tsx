import { EditOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { TeamEditForm } from 'shared/index';

const TeamEditButton = () => {
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
      <Modal title="Team Edit Form" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Update" cancelText="Cancel">
        <TeamEditForm />
      </Modal>
    </>
  )
}

export default TeamEditButton;