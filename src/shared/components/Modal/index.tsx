import { Button, Modal, Tooltip } from "antd";
import { useState } from "react";
import { CustomModalType } from "types/CustomModalType";
import styles from './Modal.module.scss';

const CustomModal: React.FC<CustomModalType> = ({ actionKey, classname, icon, title, formFields }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    if (formFields && actionKey) {
      formFields(actionKey);
    }
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
        {formFields && actionKey ? formFields(actionKey) : ''}
      </Modal>
    </>
  )
};

export default CustomModal;