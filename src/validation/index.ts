import { EmployeeFormType } from '@/shared/models';
import { ZodType, number, string, z } from 'zod';

export const EmployeesFormScheme: ZodType<EmployeeFormType> = z.object({
    firstName: string().min(20).max(50),
    lastName: string().min(20).max(50),
    email: string().email(),
    password: string(),
    teamID: number(),
    roleID: number(),
    status: number()
});