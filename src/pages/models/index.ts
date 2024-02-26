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

export interface ITeamTable  {
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
    user_id: number;
    fullname: string;
    email: string;
    teamName: string;
    role: string;
    status: string;
};