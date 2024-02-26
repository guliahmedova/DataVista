import { setModalOpen } from "@/redux/features/modal";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { ICustomModalType } from "@/shared/models";
import { Button, Modal, Tooltip } from "antd";
import styles from './CustomModal.module.scss';

const CustomModal: React.FC<ICustomModalType> = ({ classname, icon, title, actionStatus, modalID }) => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state: RootState) => state.modal[modalID]);

  const showModal = () => {
    dispatch(setModalOpen({ modalId: modalID, isOpen: true }));
  };

  const closeModal = () => {
    dispatch(setModalOpen({ modalId: modalID, isOpen: false }));
  };

  return (
    <>
      <Tooltip title={title} placement="top">
        <Button className={styles[classname]} icon={icon} size="large" onClick={showModal} />
      </Tooltip>
      <Modal open={isOpen}
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
        onCancel={closeModal}>
        {actionStatus}
      </Modal>
    </>
  )
};

export default CustomModal;