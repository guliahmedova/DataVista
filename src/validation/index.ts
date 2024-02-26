import { EmployeeFormType } from '@/shared/models';
import { ZodType, number, object, string, z } from 'zod';

export const EmployeesFormScheme: ZodType<EmployeeFormType> = z.object({
    name: string().min(2, { message: "Must not be less than 2" }).max(50, { message: "Must not be more than 50" }),
    surname: string().min(2).max(50),
    email: string().email(),
    password: string(),
    team: object({
        id: number(),
        name: string()
    }),
    role: object({
        id: number(),
        roleEnum: string()
    })
});