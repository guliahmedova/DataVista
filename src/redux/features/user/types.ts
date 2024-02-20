export interface ILogin  {
    access_token: string;
    expired_date: string;
    user_id: number;
};

export type UserDataDto = {
    name: string | null;
    surname: string | null;
    email: string | null;
    role: {
        id: number,
        roleEnum: string
    },
    team: string,
    project: [],
    status: string
};