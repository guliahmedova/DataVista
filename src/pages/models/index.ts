export const enum ACTION_KEY {
    CREATE = 'CREATE',
    UPDATE = 'UPDATE',
    VIEW = "VIEW",
    FILTER = "FILTER",
    DELETE = "DELETE",
    RESET_PASSWORD = "RESET_PASSWORD"
};

export type ProjectType = {
    id: number,
    projectName: string,
};

export type TeamType = {
    id: number,
    teamName: string,
};

export type ReportType = {
    id: number,
    reportName: string,
    projectName: string,
    employeeName: string,
    reportCreatedAt: string
};

export interface UserType {
    key: string;
    firstname: string;
    lastname: string;
    email: string;
    teamname: string;
    rolename: string;
    status: string;
};