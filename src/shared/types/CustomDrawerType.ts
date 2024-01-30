import { ReactNode } from "react";

export interface CustomDrawerType {
    okText: string,
    children?: ReactNode,
    classname: string,
    icon: JSX.Element,
    actionKey: string,
    title?: string;
    formFields?: (actionKey: string) => ReactNode;
};