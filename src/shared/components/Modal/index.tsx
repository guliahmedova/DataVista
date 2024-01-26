import { Button, Modal, Tooltip } from "antd";
import { FC, useState } from "react";
import { ActionModalType } from "src/shared/types/ActionModalType";
import styles from './modal.module.scss';

const CustomModal: FC<ActionModalType> = ({ actionKey, classname, icon, title, formFields , okText}) => {
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
      <Modal title={title} open={isModalOpen} onOk={handleOk} okText={okText} cancelText='Close' onCancel={handleCancel}>
        {formFields && actionKey ? formFields(actionKey) : ''}
      </Modal>
    </>
  )
};

export default CustomModal;