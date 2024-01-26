export interface ActionModalType {
    okText: string,
    isModalOpen: boolean,
    handleCancel: () => void,
    handleOk: () => void,
    title: string,
    key: string
};