import { Button, Tooltip } from "antd";
import { FC, useState } from "react";
import { ActionButtonType } from "src/shared/types/ActionButtonType";
import styles from './actionButton.module.scss';
import ActionModal from "../Modal";

const ActionButton: FC<ActionButtonType> = ({ actionKey, classname, icon, title }) => {
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
        <Button className={styles[classname]} icon={icon} size="large" onClick={showModal}>{title === 'Create' && title}</Button>
      </Tooltip>
      <ActionModal
        okText={actionKey}
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        title={title}
        key={actionKey} />
    </>
  )
};

export default ActionButton;