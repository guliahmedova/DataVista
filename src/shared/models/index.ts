import { ReactNode } from "react";

export const enum ROLES {
    SUPERADMIN = 1,
    ADMIN = 2,
    HEAD = 3,
    EMPLOYEE = 4
};

export interface ICustomDrawerType {
    okText: string,
    children?: ReactNode,
    classname: string,
    icon: JSX.Element,
    actionKey: string,
    title?: string;
    actionStatus: ReactNode
};

export interface ICustomModalType {
    okText: string,
    children?: ReactNode,
    classname: string,
    icon: JSX.Element,
    actionKey: string,
    title?: string;
    actionStatus: ReactNode,
    modalID: string,
};

export interface IHeaderType {
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>> | undefined;
    setPrimary: React.Dispatch<React.SetStateAction<string>> | undefined;
    primary: string;
    isDarkMode: boolean
};

export interface ILayoutType {
    children: ReactNode
};

export interface IRenderIfType {
    children: ReactNode,
    conditions: ReactNode,
    renderelse?: ReactNode
};

export interface IFormProps {
    okText: string,
    okBtnColor: string,
    actionKey?: string,
    selectRowId?: number | null
};

// EMPLOYEE TYPES
export type EmployeeFormType = {
    name: string,
    surname: string,
    email: string,
    password: string,
    team: {
        id: number, 
        name?: string | null
    },
    role: {
        id: number,
        roleEnum?: string | null
    },
    status?: string | null
};

export interface IButton {
    okText: string,
    okBtnColor: string
};