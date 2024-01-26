import { ReactNode } from "react";

export interface ActionModalType {
    // isModalOpen: boolean,
    // handleCancel: () => void,
    // handleOk: () => void,
    okText: string,
    children?: ReactNode,
    classname: string,
    icon: JSX.Element,
    actionKey: string,
    title?: string;
    formFields?: (actionKey: string) => ReactNode;
};