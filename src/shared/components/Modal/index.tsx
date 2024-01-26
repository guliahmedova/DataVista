import { Modal } from 'antd';
import { FC } from "react";
import { ActionModalType } from 'src/shared/types/ActionModalType';

const ActionModal: FC<ActionModalType> = ({ okText, isModalOpen, handleOk, handleCancel, title, key }) => {
    return (
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} okText={okText} cancelText='Discard' onCancel={handleCancel}>
            <h1>{title}</h1>
        </Modal>
    )
}

export default ActionModal