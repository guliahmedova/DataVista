export interface ITeamResponse {
    name: string,
    members: [
        {
            name: string,
            surname: string,
            mail: string
        }
    ],
    team_id: string
};

export interface IUserResponse {
    id: number,
    name: string,
    surname: string,
    email: string,
    role: {
        id: number,
        roleEnum: string
    },
    team: null,
    project: [],
    status: string
};

export interface IRoleResponse {
    role_id: number,
    role_name: string
};

export interface IEmployeeResponse {
    fullname: string,
    email: string,
    teamName: null,
    status: string,
    role: string,
    user_id: string
};