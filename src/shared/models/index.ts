import { ReactNode } from "react";

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
    actionStatus: ReactNode
};

export interface IEmployeeFormType {
    okText: string,
    okBtnColor: string
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

export interface IProjectFormType {
    okText: string,
    okBtnColor: string
};

export interface IRenderIfType {
    children: ReactNode,
    conditions: ReactNode,
    renderelse?: ReactNode
};

export interface IReportFormType {
    okText: string,
    okBtnColor: string
};

export interface IFormProps {
    okText: string,
    okBtnColor: string,
    actionKey?: string
};

export const enum ROLES {
    SUPERADMIN = 1,
    ADMIN = 2,
    HEAD = 3,
    EMPLOYEE = 4
};

export type EmployeeFormType = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    teamID: string,
    roleID: string,
    status?: string | null
};