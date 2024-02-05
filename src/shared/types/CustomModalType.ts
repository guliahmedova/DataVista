import { ReactNode } from "react";

export interface CustomModalType {
    okText: string,
    children?: ReactNode,
    classname: string,
    icon: JSX.Element,
    actionKey: string,
    title?: string;
    actionStatus: ReactNode
};
