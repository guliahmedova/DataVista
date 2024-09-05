import { ACTION_KEY } from "@/pages/models";
import { useGetAllRolesQuery } from "@/redux/api/auth";
import { useCreateEmployeeMutation, useGetEmployeeQuery, useUpdateEmployeeMutation } from "@/redux/api/employees";
import { useGetAllTeamsQuery } from "@/redux/api/teams";
import { IRoleResponse, ITeamResponse } from "@/redux/models";
import { useAppSelector } from "@/redux/store";
import { EmployeeFormType, IFormProps } from "@/shared/models";
import utils from "@/styles/utils.module.scss";
import { EmployeesFormScheme } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Form, Input, Row, Select, SelectProps } from "antd";
import { useEffect, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";

const EmployeeForm: React.FC<IFormProps> = ({ okText, okBtnColor, actionKey, selectRowId }) => {
    const { control, handleSubmit, reset, formState: { errors } } = useForm<EmployeeFormType>({ resolver: zodResolver(EmployeesFormScheme) });
    const [createEmployee] = useCreateEmployeeMutation();
    const [updateEmployee] = useUpdateEmployeeMutation();
    const { data: teams } = useGetAllTeamsQuery();
    const { data: roles } = useGetAllRolesQuery();
    const { data: employee } = useGetEmployeeQuery(selectRowId);
    const { user_id } = useAppSelector(state => state.auth);

    const teamsOptions: SelectProps['options'] = useMemo(() => {
        return teams?.map((item: ITeamResponse) => ({
            label: item.name,
            value: String(item.team_id)
        }));
    }, [teams]);

    const rolesOptions: SelectProps['options'] = useMemo(() => {
        if (user_id) {
            return roles?.filter((item) => user_id === 1 ?
                (item.role_id !== 1 && item.role_id !== 3) :
                (item.role_id !== 1 && item.role_id !== 3 && item.role_id !== 2)).map((role: IRoleResponse) => ({
                    label: role.role_name,
                    value: role.role_id
                }));
        }
    }, [roles, user_id]);

    const submitData = (data: EmployeeFormType) => {
        if (actionKey === ACTION_KEY.CREATE) {
            createEmployee({
                firstname: data.name,
                lastname: data.surname,
                email: data.email,
                password: "password123",
                role: {
                    id: data.role.id,
                    roleEnum: data.role.roleEnum
                },
                team_id: data.team.id
            });
        }
        else if (actionKey === ACTION_KEY.UPDATE) {
            updateEmployee({
                id: selectRowId && selectRowId,
                data: {
                    name: data.name,
                    surname: data.surname,
                    email: data.email,
                    roleId: data.role.id,
                    teamId: data.team.id
                }
            })
        }
    };

    useEffect(() => {
        if (employee) { reset(employee) };
    }, [employee, reset]);

    return (
        <Form layout='vertical' onFinish={handleSubmit(submitData)}>
            <Row gutter={6}>
                <Col span={12}>
                    <Form.Item label="First Name" name="name">
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    size="large"
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                            name="name"
                        />
                    </Form.Item>
                    {errors.name && <span className={utils.err_msg}>{errors.name.message}</span>}
                </Col>
                <Col span={12}>
                    <Form.Item label="Last Name" name="surname">
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input size="large"
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                            name="surname"
                        />
                    </Form.Item>
                    {errors.surname && <span className={utils.err_msg}>{errors.surname.message}</span>}
                </Col>
                <Col span={12}>
                    <Form.Item label="Email" name="email">
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input size="large"
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    value={value}
                                    name="email" />
                            )}
                            name="email"
                        />
                    </Form.Item>
                    {errors.email && <span className={utils.err_msg}>{errors.email.message}</span>}
                </Col>
                <Col span={12}>
                    <Form.Item label="Teams" name="team.id">
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Select
                                    size="large"
                                    allowClear
                                    placeholder="Please select"
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    value={value}
                                    options={teamsOptions}
                                />
                            )}
                            name="team.id"
                        />
                    </Form.Item>
                    {errors.team && <span className={utils.err_msg}>{errors.team.message}</span>}
                </Col>
                <Col span={12}>
                    <Form.Item label="Roles" name="role.id">
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Select
                                    size="large"
                                    allowClear
                                    placeholder="Please select"
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    value={value}
                                    options={rolesOptions}
                                />
                            )}
                            name="role.id"
                        />
                    </Form.Item>
                    {errors.role && <span className={utils.err_msg}>{errors.role.message}</span>}
                </Col>
                <Col span={24} className={utils.btns_placement}>
                    <Button style={{ backgroundColor: `${okBtnColor}`, color: 'white' }} htmlType="submit">{okText}</Button>
                </Col>
            </Row>
        </Form>
    )
};

export default EmployeeForm;