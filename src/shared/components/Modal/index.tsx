import { Button, Modal, Tooltip } from "antd";
import { useState } from "react";
import { CustomModalType } from "types/CustomModalType";
import styles from './CustomModal.module.scss';

const CustomModal: React.FC<CustomModalType> = ({ classname, icon, title, actionStatus }) => {
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
      <Tooltip title={title} placement="top">
        <Button className={styles[classname]} icon={icon} size="large" onClick={showModal} />
      </Tooltip>
      <Modal open={isModalOpen} onOk={handleOk} okButtonProps={{ style: { display: 'none' } }} cancelButtonProps={{ style: { display: 'none' } }} cancelText='Close' onCancel={handleCancel}>
        {actionStatus}
      </Modal>
    </>
  )
};

export default CustomModal;