import { ACTION_KEY } from "@/pages/models";
import { useCreateEmployeeMutation, useUpdateEmployeeMutation } from "@/redux/api/employees";
import { useAppSelector } from "@/redux/store";
import { EmployeeFormType, IFormProps } from "@/shared/models";
import utils from "@/styles/utils.module.scss";
import { EmployeesFormScheme } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Form, Input, Row, Select, SelectProps } from "antd";
import { Controller, useForm } from "react-hook-form";

const roleoptions: SelectProps['options'] = [
    {
        label: 'SUPERADMIN',
        value: "1"
    },
    {
        label: 'ADMIN',
        value: "2"
    },
    {
        label: 'HEAD',
        value: "3"
    },
    {
        label: 'EMPLOYEE',
        value: "4"
    }
];

const teamptions: SelectProps['options'] = [
    {
        label: 'Frontend',
        value: "1"
    },
    {
        label: 'Backend',
        value: "2"
    },
    {
        label: 'Mobile',
        value: "3"
    },
    {
        label: 'UI',
        value: "4"
    }
];

const activeoptions: SelectProps['options'] = [
    {
        label: 'Active',
        value: "1"
    },
    {
        label: 'Deactive',
        value: "2"
    },
];

const EmployeeForm: React.FC<IFormProps> = ({ okText, okBtnColor, actionKey }) => {
    const { control, handleSubmit, formState: { errors } } = useForm<EmployeeFormType>({ resolver: zodResolver(EmployeesFormScheme) });
    const [createEmployee] = useCreateEmployeeMutation();
    const [updateEmployee] = useUpdateEmployeeMutation();
    const { user_id } = useAppSelector(state => state.auth);

    const submitData = (data: EmployeeFormType) => {
        if (actionKey === ACTION_KEY.CREATE) {
            createEmployee({
                firstname: data.firstName,
                lastname: data.lastName,
                email: data.email,
                password: data.password,
                team_id: data.teamID,
                role: {
                    id: data.roleID,
                    roleEnum: "ADMIN"
                }
            });
        }
        updateEmployee({
            id: user_id,
            data: {
                name: data.firstName,
                surname: data.lastName,
                email: data.email,
                roleId: data.roleID,
                teamId: data.teamID
            }
        })
    };

    return (
        <Form layout='vertical' onFinish={handleSubmit(submitData)}>
            <Row gutter={6}>
                <Col span={12}>
                    <Form.Item label="First Name" name="firstName">
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    size="large"
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    value={value} />
                            )}
                            name="firstName"
                        />
                    </Form.Item>
                    {errors.firstName && <span className={utils.err_msg}>{errors.firstName.message}</span>}
                </Col>
                <Col span={12}>
                    <Form.Item label="Last Name" name="lastName">
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input size="large"
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                            name="lastName"
                        />
                    </Form.Item>
                    {errors.lastName && <span className={utils.err_msg}>{errors.lastName.message}</span>}
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
                    <Form.Item label="Password" name="password">
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input.Password size="large"
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                            name="password"
                        />
                    </Form.Item>
                    {errors.password && <span className={utils.err_msg}>{errors.password.message}</span>}
                </Col>
                <Col span={12}>
                    <Form.Item label="Teams" name="teamID">
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
                                    options={teamptions}
                                />
                            )}
                            name="teamID"
                        />
                    </Form.Item>
                    {errors.teamID && <span className={utils.err_msg}>{errors.teamID.message}</span>}
                </Col>
                <Col span={12}>
                    <Form.Item label="Roles" name="roleID">
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
                                    options={roleoptions}
                                />
                            )}
                            name="roleID"
                        />
                    </Form.Item>
                    {errors.roleID && <span className={utils.err_msg}>{errors.roleID.message}</span>}
                </Col>
                {actionKey == ACTION_KEY.UPDATE && (
                    <Col span={12}>
                        <Form.Item label="Status" name="status">
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
                                        options={activeoptions}
                                    />
                                )}
                                name="status"
                            />
                        </Form.Item>
                        {errors.status && <span className={utils.err_msg}>{errors.status.message}</span>}
                    </Col>
                )}
                <Col span={24} className={utils.btns_placement}>
                    <Button style={{ backgroundColor: `${okBtnColor}`, color: 'white' }} htmlType="submit">{okText}</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default EmployeeForm;