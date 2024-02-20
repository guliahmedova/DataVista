import { EmployeeFormType } from '@/shared/models';
import { ZodType, any, string, z } from 'zod';

export const EmployeesFormScheme: ZodType<EmployeeFormType> = z.object({
    firstName: string().min(2, { message: "Must not be less than 2" }).max(50, { message: "Must not be more than 50" }),
    lastName: string().min(2).max(50),
    email: string().email(),
    password: string(),
    teamID: string(),
    roleID: string(),
    status: any().optional()
});